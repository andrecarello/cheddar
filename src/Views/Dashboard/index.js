import { mapGetters } from 'vuex';

// components
import Menu from '@/Views/_Components/Menu/index.vue';
import Sidebar from '@/Views/_Components/Sidebar/index.vue';

export default {
	name: 'Home',

	components: {
    'fd-menu': Menu,
    'fd-sidebar': Sidebar
  },

	data: () => ({
    cards: [ 'Today', 'Yesterday' ],
    breadcrumb: [
      {
        text: 'Dashboard',
        disabled: true,
        href: '/dashboard',
      }
    ],
	})

	// computed: mapGetters({})
};
