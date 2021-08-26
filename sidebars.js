module.exports = {
  docs: [
      'Quick_Start',
      'Integrations',
      'Whats New',
    {
      type: 'category',
      label: 'Interface Elements',
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
                  'Administration/Integration_config',
                  'Administration/Lookup_Data',
                  'Administration/Customization',
                  'Administration/Subscriptions',
              ],
        },
      ],
    },
  ],
};
