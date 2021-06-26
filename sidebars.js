module.exports = {
  docs: [
      'getting-started',
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
          label: 'Administration',
          items:
              ['Administration_Pages/Profile',
                'Administration_Pages/Company',
                'Administration_Pages/Users',
                'Administration_Pages/Roles',
                'Administration_Pages/Integration_config',
              'Administration_Pages/Lookup_Data',
                  'Administration_Pages/Customizaton',
                  'Administration_Pages/Subscriptions',
              ],
        },
      ],
    },
  ],
};
