import _ from 'lodash';
import { mapGetters } from 'vuex';

export default {
	name: 'DashboardEmail',

	mounted() {
		_.controller('dashboard').get();
	},

	data() {
		return {
			search: '',
			headers: [
				{
					text: 'Nome',
					align: 'start',
					sortable: false,
					value: 'name'
				},
				{ text: 'E-mail', value: 'email' },
				{ text: 'Telefone', value: 'phone' },
				{ text: 'Usuário', value: 'username' },
				{ text: 'Site', value: 'website' },
				{ text: 'Actions', value: 'actions', sortable: false }
			],

      dialog: false,
      snackbar: false,

			loading: {
        request: false,
        remove: false
      },

      timeout: 3000
		};
	},

	methods: {
		select: function(method, id) {
      if (method === 'delete') this.dialog = true;

      this.loading.request = true

			_.controller('dashboard').getById(id).then(() => {
        this.loading.request = false
      });
		},
		remove: function(id) {
			this.loading.remove = true;

			_.controller('dashboard')
				.remove(id)
				.then((response) => {
					if (response.status === 200) {
            this.dialog = false;
            this.snackbar = true
					}
				})
				.finally(() => (this.loading.remove = false));
		}
	},

	computed: mapGetters({
		users: 'DashboardModel/users',
		user: 'DashboardModel/user'
	})
};
