import store from '../Store';
import axios from 'axios';

/**
 * In all cases prefer use camelcase
 *
 * PRIVATE FUNCTIONS USE _{NAME}
 * PRIVATE CONST/LET USE _{NAME}
 *
 * GLOBAL FUNCTIONS OR VARS USE {NAME}
 *
 */
class Controller {
	constructor() {
		self.store = this.store = store;
		self.state = this.state = store.state;
	}

	baseUrl = 'https://jsonplaceholder.typicode.com';

	_logout(model) {
		this.store.dispatch(_.upperFirst(model) + 'Model/reset');
	}

	request(method, url, data = {}) {

    let config = {
      method: method,
      url: url
    }

    if (data) {
      config = {
        ...config,
        data
      }
    }

    return axios(config)
	}

	_dispatch(model, key, value) {
		this.store.dispatch(_.upperFirst(model) + 'Model/save' + _.upperFirst(key), value);
	}

	dispatch(model, key, value = null) {
		if (typeof key === 'object' && value === null) {
			const obj = key;
			Object.keys(obj).map((k) => this._dispatch(model, k, obj[k]));
		} else {
			this._dispatch(model, key, value);
		}
	}
}

export default Controller;
