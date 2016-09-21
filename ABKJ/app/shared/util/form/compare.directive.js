angular.module('abkj.compare.directive', [])
.directive('abkjCompare', abkjCompare);

function abkjCompare() {
	return {
		restrict: 'A',
		scope: {
			otherModel: '@abkjCompare' //'=abkjCompare'
		},
		link: function(scope, element, attributes) {
			console.log(arguments);
		}
	}
};
