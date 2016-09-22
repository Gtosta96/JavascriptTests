describe('Test Registery Factory Functions', function() {
	debugger;
    // inject the module to access its scope (angular mock provides it)
    beforeEach(angular.mock.module('abkj.registery.factory'));

	// inject registeryFactory
	var registeryFactory;
	beforeEach(inject(function(_registeryFactory) {
		registeryFactory = _registeryFactory;
	}));


    it('should return 3 for 1 + 2', function() {
        var a = document.getElementById('x').value = 1;
        var b = document.getElementById('y').value = 2;
        expect(a + b).toBe('3');
    });
});
