/*
 * abkjFieldComparator/abkjComparator são diretivas com nível técnico
 * 'elevado' devido a fins didaticos para compartilhar escopos.
 * Há outras opções disponíveis, como através de services, etc.
*/
angular.module('abkj.compare.directive', [])
.directive('abkjFieldComparator', abkjFieldComparator)
.directive('abkjCompare', abkjCompare);

function abkjFieldComparator() {
	return {
		restrict: 'A',
		controller: abkjFieldComparatorCtrl,
	};

	//abjkFieldComparatorCtrl.$inject('abkjRegisteryFactory');
	function abkjFieldComparatorCtrl(registeryFactory) {
		var vm = this;
		vm = registeryFactory;
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
			console.log(arguments);
		}
	}
};