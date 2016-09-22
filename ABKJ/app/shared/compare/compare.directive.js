/*
 * abkjFieldComparator/abkjComparator são diretivas com nível técnico
 * 'elevado' devido a fins didaticos para compartilhar escopos.
 * Há outras opções disponíveis, como através de services, etc.
*/
angular.module('abkj.compare.directive', [])
.directive('abkjFieldComparator', abkjFieldComparator)
.directive('abkjCompare', abkjCompare)

abkjFieldComparator.$inject = ['abkjRegisteryFactory'];
function abkjFieldComparator(registeryFactory) {
	return {
		restrict: 'A',
		controller: abkjFieldComparatorCtrl,
	};

	function abkjFieldComparatorCtrl() {
		var vm = this;
		angular.merge(vm, registeryFactory);
	};
};


function abkjCompare() {
	return {
		restrict: 'A',
		require: '^abkjFieldComparator',
		scope: {
			otherModel: '@abkjCompare' //'@abkjCompare'
		},
		link: function(scope, element, attributes, abkjFieldComparatorCtrl) {
			abkjFieldComparatorCtrl.register(element[0]);

		}
	}
};
