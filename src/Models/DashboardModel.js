export const defaultState = {
	users: [],
	user: {}
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		users: (state) => state.users,
		user: (state) => state.user
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveUsers({ commit }, value) {
			commit('setUsers', value);
		},
		saveUser({ commit }, value) {
			commit('setUser', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setUsers(state, value) {
			state.users = value;
		},
		setUser(state, value) {
			state.user = value;
		}
	}
};
