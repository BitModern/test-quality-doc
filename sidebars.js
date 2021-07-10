module.exports = {
  docs: [
      'Quick_Start',
      'Integrations',
      'Whats New',
    {
      type: 'category',
      label: 'The Main Interface',
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
