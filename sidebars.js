module.exports = {
  docs: [
      'getting_started',
      {
        type: 'category',
        label: 'TestQuality CLI',
        items: [
          'testquality_cli/overview',
          'testquality_cli/reference',
           ]
      },
      {
        type: 'category',
        label: 'Migration & Imports',
        items: [
          'migration-imports/TestRail',
          'importing_data',
           ]
      },
      {
        type: 'category',
        label: 'Automations & Imports',
        items: [
            {
            type: 'category',
            label: 'Test Runners Integration',
            items:[
                'automations-imports/test-runners/integrating_with_Cucumber',
                'automations-imports/test-runners/integrating_with_Cypress',
                'automations-imports/test-runners/integrating_with_Jasmine',
                'automations-imports/test-runners/integrating_with_Jest',
                'automations-imports/test-runners/integrating_with_JUnit',
                'automations-imports/test-runners/integrating_with_Mocha',
                'automations-imports/test-runners/integrating_with_Nightwatch',
                'automations-imports/test-runners/integrating_with_NUnit',
                'automations-imports/test-runners/integrating_with_PHPUnit',
                'automations-imports/test-runners/integrating_with_Playwright',
                'automations-imports/test-runners/integrating_with_Postman',
                'automations-imports/test-runners/integrating_with_Pytest',
                'automations-imports/test-runners/integrating_with_Robot Framework',
                'automations-imports/test-runners/integrating_with_RSpec',
                'automations-imports/test-runners/integrating_with_Selenium',
                'automations-imports/test-runners/integrating_with_TestNG',
                'automations-imports/test-runners/integrating_with_WebdriverIO',
                'automations-imports/test-runners/integrating_with_xUnit',
                 ]
            },
          'importing_data',
              ]
        },
      {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrate_with_jira',
        'integrate_with_github',
        'integrate_with_slack',
        {
          type: 'category',
          label: 'Defect Management',
          items:[
              'defect_management',
               ]
      },
      ]
      },
      {
        type: 'category',
        label: 'TestQuality API',
        items: [
          'api',
              ]
      },
      {
      type: 'category',
      label: 'User Guide',
      items: [
          'test_plans',
          'project',
          'overview',
          'tests',

          
          'cycles',
          'stories',
          'run',
          'explorations',
          'analyze',

          {
              type: 'category',
              label: 'Test Management',
              items:
                  ['filtering',
                      'test_drawer',
                      'importing',
                      'shared_steps',

                  ],
          },
          {
            type: 'category',
            label: 'Administration',
            items:
                ['administration/profile',
                    'administration/company',
                     'administration/users',
                    'administration/roles',
                    'administration/watches',
                    'administration/integration_config',
                    'administration/lookup_data',
                    'administration/customization',
                    'administration/environments',
                    'administration/subscriptions',
                ],
          },
       
      ],
    },
  ],
};
