angular.module('abkj.ListClass.directive', [])
.directive('abkjListClass', abkjListClass);

function abkjListClass() {
	return {
		restrict: 'A',
		link: function(scope, element, attributes) {
			var nodes = element.children();
			nodes.on('click', function() {
				var aEl = angular.element(this);

				nodes.removeClass(attributes.abkjListClass);
				aEl.addClass(attributes.abkjListClass);
			});
		}
	};
};
