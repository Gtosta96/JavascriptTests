angular.module('abkj.ListClass.directive', [])
.directive('abkjListClass', abkjListClass);

function abkjListClass() {
	return {
		restrict: 'A',
		scope: {
			abkjListClass: '@' //'@abkjListClass'
		},
		link: function(scope, element, attributes) {
			var nodes = element.children();
			nodes.on('click', function() {
				var _this = angular.element(this);
				
				nodes.removeClass('active');
				_this.addClass('active');
			});
		}
	};
};
