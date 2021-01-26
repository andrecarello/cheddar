// -> import default controller
import Controller from './Controller';

class DashboardController extends Controller {
	// set constants
	_model = 'dashboard';
	_loading = 'loading';

	get() {
		const url = this.baseUrl + '/users';

		this.request('get', url).then(({ data }) => this.dispatch(this._model, 'users', data));
	}

	getById(id) {
		const url = this.baseUrl + '/users/' + id;
		return this.request('get', url).then(({ data }) => this.dispatch(this._model, 'user', data));
	}

	remove(id, callback) {
		const url = this.baseUrl + '/users/' + id;

		return this.request('delete', url)
	}
}

export default DashboardController;
