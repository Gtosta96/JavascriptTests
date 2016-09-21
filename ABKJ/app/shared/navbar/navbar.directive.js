angular.module('abkj.navbar.directive', [])
.directive('abkjNavbar', abkjNavbar);

function abkjNavbar() {
    return {
        restrict: 'E',
        templateUrl: 'app/shared/navbar/navbar.view.html'
    };
};
