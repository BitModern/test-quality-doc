module.exports = {
  docs: [
      'getting_started',
      {
        type: 'category',
        label: 'TestQuality CLI',
        items: [
          'testquality_cli',
          'cli_reference',
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
                'integrating_with_Cucumber',
                'integrating_with_Cypress',
                'integrating_with_Jasmine',
                'integrating_with_Jest',
                'integrating_with_JUnit',
                'integrating_with_Mocha',
                'integrating_with_Nightwatch',
                'integrating_with_NUnit',
                'integrating_with_PHPUnit',
                'integrating_with_Playwright',
                'integrating_with_Postman',
                'integrating_with_Pytest',
                'integrating_with_Robot Framework',
                'integrating_with_RSpec',
                'integrating_with_Selenium',
                'integrating_with_TestNG',
                'integrating_with_WebdriverIO',
                'integrating_with_xUnit',
                 ]
            },
          'importing_data',
              ]
        },
      {
      type: 'category',
      label: 'Integrations',
      items: [
        'jira_setup',
        'github_setup',
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
          'project',
          'overview',
          'tests',

          
          'cycles',
          'stories',
          'run',
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
                    'administration/configurations',
                    'administration/subscriptions',
                ],
          },
       
      ],
    },
  ],
};
