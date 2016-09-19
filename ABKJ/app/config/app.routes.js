angular.module('abkj.routes', ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'TestsJS/ABKJ/app/components/form/form.html'
	})

	.otherwise({redirectTo: '/'});
});
