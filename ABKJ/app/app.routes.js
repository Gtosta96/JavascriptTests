angular.module('abkj.routes', ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'app/components/home/home.view.html'
	})
	.when('/form', {
		templateUrl: 'app/components/form/form.view.html'
	})

	.otherwise({redirectTo: '/'});
});
