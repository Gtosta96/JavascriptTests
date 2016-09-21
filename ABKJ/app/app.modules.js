angular.module('abkj', loadModules());

function loadModules() {
	return [
		//Application configuration
		'abkj.routes',

		//Application directives (shared)
		'abkj.navbar.directive',
		'abkj.ListClass.directive',
		'abkj.compare.directive',
		'abkj.registery.factory'
	];
};
