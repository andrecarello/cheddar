export default {
	name: 'FDSidebar',

	data: () => ({
		drawer: null,
		links: [ [ 'mdi-view-dashboard', 'Dashboard', '/dashboard', 'dashboard' ], [ 'mdi-email', 'E-mail', '/dashboard/email', 'email' ] ]
  }),

  methods: {
    select: function(model) {
      if (model !== 'dashboard') {
        _.controller('dashboard').get('email')
      }
    }
  }
};
