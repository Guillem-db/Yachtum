'use strict';

/* jasmine specs for controllers go here */
describe('Yachtum controllers', function() {

  describe('BarcoListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('yachtumApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('barcos/barcos.json').
    respond([{nombre: 'Barco grande'}, {nombre: 'Yate'}]);


    scope = $rootScope.$new();
    ctrl = $controller('BarcoListCtrl', {$scope: scope});
    }));

    it('should create "barcos" model with 2 barcos fetched from xhr', function() {
    expect(scope.phones).toBeUndefined();
    $httpBackend.flush();

    expect(scope.barcos).toEqual([{nombre: 'Barco grande'},
                                  {nombre: 'Yate'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });
  describe('BarcoDetailCtrl', function(){
   });
});
