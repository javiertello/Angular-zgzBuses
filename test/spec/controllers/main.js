'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tareasApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('poste should be null before start and invalido == false', function () {
    expect(scope.poste).toBe(null);
		expect(scope.invalido).toBe(false);
		expect(scope.url).toBe('http://www.urbanosdezaragoza.es/frm_esquemaparadatime.php?poste=null');
  });
	
	// Add a correct "poste" and obtain info
	it('invalido should be false and url correct', function () {
		scope.poste = 222;
	  scope.obtener();
    expect(scope.poste).toBe(222);
		expect(scope.invalido).toBe(false);
		expect(scope.url).toBe('http://www.urbanosdezaragoza.es/frm_esquemaparadatime.php?poste=222');
  });

	// Add a incorrect "poste" and obtain info
	it('invalido should be true and url incorrect', function () {
		scope.poste = 999999999;
		scope.obtener();
    expect(scope.poste).toBe(999999999);
		expect(scope.invalido).toBe(true);
  });
	
});
