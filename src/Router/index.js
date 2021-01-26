import Vue from 'vue';
import VueRouter from 'vue-router';

// -> import views
import ViewController from '@/Controllers/ViewController';

Vue.use(VueRouter);

const routes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
    component: ViewController.load('Dashboard'),
		meta: {
			KeepAlive: true, // Need to be cached?
			requiresAuth: false
    },
    children: [
      {
        path: 'email',
        name: 'DashboardEmail',
        component: ViewController.load('Dashboard/Email')
      }
    ]
  },

  {
		path: '/login',
		name: 'Auth',
		component: ViewController.load('Auth'),
		meta: {
			KeepAlive: false, // Need to be cached?
			requiresAuth: false
    }
	},
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: "_is:active",
  linkExactActiveClass: "_is:exact-active",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	const { token } = _.model('Auth');

	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!token) {
			next({ name: 'Auth' });
		} else {
			next();
		}
	} else {
		next(); // make sure to always call next()!
  }
});

export default router;
