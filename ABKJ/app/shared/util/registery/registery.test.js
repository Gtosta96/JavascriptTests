describe('Test: Testing Registery Factory', function() {

    // inject the module to access its scope (angular mock provides it)
    beforeEach(angular.mock.module('abkj.registery.factory'));

    // inject registeryFactory
    var RegisteryFactory;
    beforeEach(inject(function(_RegisteryFactory_) {
        RegisteryFactory = _RegisteryFactory_;
    }));


    it('Should contain all factory functions', function() {

        var test = [];
        var keys = Object.keys(RegisteryFactory);
        keys.forEach(function(attribute) {
            test.push(RegisteryFactory[attribute]);
        });
        var expectation = new Array(test.length).fill(undefined);

        expect(test).not.toBe(expectation);
    });
});
