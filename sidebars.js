module.exports = {
  docs: [
      'Quick_Start',

      'Whats New',
      'Integrations',
    {
      type: 'category',
      label: 'User Guide',
      items: [
          'Overview',
          'Tests',


          'Run',
          'Cycles',
          'Analyze',

          {
              type: 'category',
              label: 'Test Management',
              items:
                  ['Filtering',
                      'Test_Drawer',
                      'Importing',

                  ],
          },
        {
          type: 'category',
          label: 'Administration',
          items:
              ['Administration/Profile',
                  'Administration/Company',
                   'Administration/Users',
                  'Administration/Roles',
                  'Administration/Watches',
                  'Administration/Integration_config',
                  'Administration/Lookup_Data',
                  'Administration/Customization',
                  'Administration/Subscriptions',
              ],


        },
      'API_CLI', ],
    },
  ],
};
