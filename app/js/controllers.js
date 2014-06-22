'use strict';

/* Controllers */

var yachtumControllers = angular.module('yachtumControllers', []);

yachtumControllers.controller('BarcoListCtrl',['$scope','$http', function($scope,$http) {

  $http.get('barcos/barcos.json').success(function(data){
  	$scope.barcos=data;
  });	
  $http.get('barcos/listaPuertos.json').success(function(data) {
        $scope.listaPuertos = data;
    });
  $scope.orderProp="age";
  $http.get('barcos/' + 'velero' + '.json').success(function(data) {
      $scope.barcosd = data;
    });
  $scope.clicksearch=11;
  $scope.orderBarcos = 'porder';
  $scope.reverse=false;
  this.today=function(){
    return new Date();
  }
   $scope.end = new Date();
  
  $scope.minStartDate = $scope.end; //fixed date
  
  this.clickSearchb= function(setClickSearch){
      $scope.clicksearch=setClickSearch;
    };
  this.searchClicked=function(checkTab){
      return $scope.clicksearch===checkTab;
    };
}]);

yachtumControllers.controller('BarcoDetailCtrl', ['$scope', '$routeParams', '$http',
   function($scope, $routeParams, $http) {
    $http.get('barcos/' + $routeParams.barcoId + '.json').success(function(data) {
        $scope.barco = data;
    });
   
}]);
yachtumControllers.controller('BarcoPanelsCtrl', ['$scope', '$routeParams', '$http',
   function($scope, $routeParams, $http) {
    $http.get('barcos/' + $routeParams.barcoId + '.json').success(function(data) {
        $scope.barco = data;
    });
    this.tab=2;
    this.review=1;
    
    
    this.selectTab= function(setTab){
       this.tab=setTab;
    };
    this.isSelected=function(checkTab){
      return this.tab===checkTab;
    };
    this.ReviewSelected=function(checkReview){
      return this.review===checkReview;
    };
     this.selectReview= function(setReview){
      if(this.ReviewSelected(setReview)){
        this.review=1;
        return;
      }
       this.review=setReview;
     
    };
}]);


yachtumControllers.controller('ReviewController',['$scope', '$routeParams', '$http',
   function($scope, $routeParams, $http) {
    this.review = {};
    
    $http.get('barcos/' + $routeParams.barcoId + '.json').success(function(data) {
        this.barco = data;
    });
    this.addReview = function(barco) {
      barco.reviews.push(this.review);

      this.review = {};
    };
  
}]);