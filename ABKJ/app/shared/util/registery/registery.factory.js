angular.module('abkj.registery.factory', [])
.factory('RegisteryFactory', RegisteryFactory);

function RegisteryFactory() {
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
		return (key ? deposit[key] : deposit);
	};

	function destroy(key) {
		key ? delete deposit[key] : (deposit = {});
	};
};
