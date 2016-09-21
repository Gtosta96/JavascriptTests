angular.module('abkj.registery.factory')
.factory('abkjRegisteryFactory', abkjRegistery);

function abkjRegistery() {
	var deposit = {};

	return {
		register: register,
		get: get,
		destroy: destroy
	}

	function register(el) {
		var key = el.id || el.name;
		deposit[key] = el;
	};

	function get(key) {
		return deposit[key];
	}
};
