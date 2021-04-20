export default {
  "title": "TestQuality Documentation",
  "tagline": "TestQuality Test Management Documentation",
  "url": "https://doc.testquality.com/",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "TestQuality",
  "projectName": "docusaurus",
  "themeConfig": {
    "navbar": {
      "title": "TestQuality Docs",
      "logo": {
        "alt": "TestQuality Logo",
        "src": "img/logo.svg"
      },
      "items": [],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting Started",
              "to": "/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "TestQuality Integrations",
              "href": "https://www.testquality.com/integrations/"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/marketplace/testquality"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Bitmodern, Inc."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/torquilharkness/Documents/TQ Files/Docusaurus/Git Clone Docusaurus/test-quality-doc/sidebars.js",
          "routeBasePath": "/",
          "editUrl": "https://github.com/BitModern/test-quality-doc"
        },
        "theme": {
          "customCss": "/Users/torquilharkness/Documents/TQ Files/Docusaurus/Git Clone Docusaurus/test-quality-doc/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};