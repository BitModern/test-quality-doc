// Build, deploy and index the TestQuality documentation site.
//
// Replaces the `prod-test-quality-doc` Jenkins freestyle job (ENG-32), whose
// logic lived in a text box on a single EC2 host, unversioned and unreviewable.
//
// Unlike the SPA and App pipelines this one has no environment parameter: the
// docs have a single estate (DocDeployStack -> doc.testquality.com). That is
// deliberate. A `choice` parameter defaults to its first entry, so where two
// environments share a file the target must be derived from job identity and
// fail closed -- see the sibling repos. Here there is nothing to choose, so
// there is nothing to get wrong.
//
// Jenkins job setup: a Pipeline job using "Pipeline script from SCM" against
// this repo. Seed its nextBuildNumber from the freestyle job it replaces, read
// OFF THE JENKINS HOST at conversion time rather than from any document -- the
// counters keep moving, so a written-down value goes stale.
//
// Two details are load-bearing; do not "simplify" them away:
//
//   1. Every sh block declares #!/bin/bash. Jenkins runs `sh` with /bin/sh,
//      which is dash on Ubuntu, and nvm.sh is bash-only -- under dash it fails
//      with "nvm.sh: _: parameter not set".
//   2. -u is enabled only AFTER nvm is sourced, because nvm.sh itself
//      references unset variables.

pipeline {
    agent any

    environment {
        NODE_OPTIONS   = '--max_old_space_size=8192'
        WD_PREFIX      = 'Doc'
        WD_SUBDOMAIN   = 'doc'
        DEPLOY_STACK   = 'DocDeployStack'
        WD_SOURCE_PATH = "${env.WORKSPACE}/build"
    }

    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '30'))
        disableConcurrentBuilds()
        // A CDK approval prompt on a headless agent blocks indefinitely, and
        // with concurrent builds disabled it wedges every later deploy.
        timeout(time: 45, unit: 'MINUTES')
    }

    stages {
        stage('Build') {
            steps {
                sh '''#!/bin/bash
                    set -eo pipefail
                    export NVM_DIR="$HOME/.nvm"
                    . "$NVM_DIR/nvm.sh"
                    set -u
                    nvm use 18
                    node -v

                    # Remove any clone left by an aborted build before anything
                    # globs the workspace. post{always} cannot be relied on -- it
                    # does not run if the agent dies mid-build.
                    rm -rf .web-deploy

                    yarn
                    yarn build
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''#!/bin/bash
                    set -eo pipefail
                    export NVM_DIR="$HOME/.nvm"
                    . "$NVM_DIR/nvm.sh"
                    set -u

                    # Refuse to deploy nothing: docusaurus rebuilds build/ from
                    # scratch, so an empty directory here would publish an empty
                    # site over the live one.
                    test -d "$WD_SOURCE_PATH" || { echo "no build at $WD_SOURCE_PATH" >&2; exit 1; }
                    test -s "$WD_SOURCE_PATH/index.html" || { echo "build has no index.html" >&2; exit 1; }

                    # Vendor the CDK app into THIS workspace rather than reading
                    # another Jenkins job's workspace, which was an undeclared
                    # dependency on a directory that had gone 13 months stale
                    # (ENG-29). Its lockfile needs npm 7+, which node 18 provides.
                    nvm use 18
                    rm -rf .web-deploy
                    git clone --depth 1 git@github.com:BitModern/web-deploy.git .web-deploy
                    npm --prefix .web-deploy ci
                    npm --prefix .web-deploy run cdk deploy "$DEPLOY_STACK"
                '''
            }
        }

        stage('Index for search') {
            steps {
                // Algolia DocSearch scraper. Runs after the deploy because it
                // crawls the published site, not the local build output -- so a
                // failure here means the site is live but its search index is
                // stale, which is why it is a separate stage rather than folded
                // into Deploy.
                sh '''#!/bin/bash
                    set -eo pipefail
                    set -u
                    cd docsearch

                    # Credentials come from AWS Secrets Manager, not from the
                    # committed docsearch/.env (ENG-45). The scraper PUSHES the
                    # index, so API_KEY is write-capable -- it is a real
                    # credential, not a search-only key.
                    trap 'rm -f .env.ci' EXIT
                    aws secretsmanager get-secret-value \
                        --region us-east-1 \
                        --secret-id testquality/ci/algolia-docsearch \
                        --query SecretString --output text > .env.ci

                    docker run --rm --env-file=.env.ci \
                        -e "CONFIG=$(jq -r tostring < ./algolia.json)" \
                        algolia/docsearch-scraper
                '''
            }
        }
    }

    post {
        always {
            sh 'rm -rf .web-deploy || true'
        }
    }
}
