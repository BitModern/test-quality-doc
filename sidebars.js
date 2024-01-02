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
          'importing_data',
          
        ]
        },
      {
      type: 'category',
      label: 'Integrations',
      items: [
        'jira_setup',
        'github_setup',
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
