module.exports = {
  docs: [
      'getting_started',
      'quick_start',

      'whats_new',
      'demo',
      'integrations',
      'jira_setup',
      'github_setup',
    {
      type: 'category',
      label: 'User Guide',
      items: [
          'project',
          'overview',
          'tests',


          'run',
          'cycles',
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
      'api_cli',
          'api',

      ],
    },
  ],
};
