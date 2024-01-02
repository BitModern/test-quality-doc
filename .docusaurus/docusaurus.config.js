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
          "title": "Links",
          "items": [
            {
              "label": "TestQuality Integrations",
              "href": "https://www.testquality.com/integrations/"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/_TestQuality"
            },
            {
              "label": "TestQuality Homepage",
              "href": "https://twitter.com/_TestQuality"
            }
          ]
        },
        {
          "title": "Integrations",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/marketplace/testquality"
            },
            {
              "label": "JIRA",
              "href": "https://marketplace.atlassian.com/apps/1218190/testquality-for-jira-test-management"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2024 Bitmodern, Inc."
    },
    "algolia": {
      "appId": "9U0R4XCNQK",
      "apiKey": "c6b1dd0bdd29bd194bfac83ba5ae39e6",
      "indexName": "testqualitydoc",
      "contextualSearch": true,
      "externalUrlRegex": "testquality\\.com",
      "searchParameters": {},
      "searchPagePath": "search"
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
          "sidebarPath": "C:\\Users\\ASUS\\Desktop\\Git-TQ\\test-quality-doc\\sidebars.js",
          "routeBasePath": "/",
          "editUrl": "https://github.com/BitModern/test-quality-doc"
        },
        "theme": {
          "customCss": "C:\\Users\\ASUS\\Desktop\\Git-TQ\\test-quality-doc\\src\\css\\custom.css"
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