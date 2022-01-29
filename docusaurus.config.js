/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'TestQuality Documentation',
  tagline: 'TestQuality Test Management Documentation',
  url: 'https://doc.testquality.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TestQuality', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {


    navbar: {
      title: 'TestQuality Docs',
      logo: {
        alt: 'TestQuality Logo',
        src: 'img/logo.svg',
      },
      items: [


      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
          ],
        },
        {
          title: 'Links',
          items: [
                        {
              label: 'TestQuality Integrations',
              href: 'https://www.testquality.com/integrations/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/_TestQuality',
            },

            {
              label: 'TestQuality Homepage',
              href: 'https://twitter.com/_TestQuality',
            },

          ],
        },
        {
          title: 'Integrations',
          items: [

            {
              label: 'GitHub',
              href: 'https://github.com/marketplace/testquality',
            },
            {
              label: 'JIRA',
              href: 'https://marketplace.atlassian.com/apps/1218190/testquality-for-jira-test-management',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bitmodern, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/BitModern/test-quality-doc',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
