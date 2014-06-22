'use strict';

/* Directives */

var yachtumDirectives=angular.module('yachtumDirectives',[]);


yachtumDirectives.directive('barcoPanels', ['$routeParams', '$http',function($scope,$routeParams, $http){
 return{
  restrict:'E',
  scope: {
       
        barcos:'=listbarcos'
      },
  templateUrl:'partials/barco-panels.html',
  controller: function($scope,$routeParams, $http){
    this.tab=2;
    this.review=1;
    $http.get('barcos/' + 'velero' + '.json').success(function(data) {
      $scope.barco = data;
    });
    
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

  },

  

controllerAs:'panels'
};
}]);


yachtumDirectives.directive("productReviews", function() {
      return {
        restrict: 'E',
        templateUrl: "partials/barco-review.html"
      };
    });
yachtumDirectives.directive("bottomThumbnail", function() {
      return {
        restrict: 'E',
        templateUrl: "partials/bottom-homepage.html"
      };
    });


yachtumDirectives.directive("barcoSearch", function() {
      return {
        restrict: 'E',
        templateUrl: "partials/search-box.html"
      };
    });

yachtumDirectives.directive("searchList", function() {
      return {
        restrict: 'E',
        templateUrl: "partials/search-list.html"
      };
    });

yachtumDirectives.directive('topMenu',['$http',function($scope,$http){
return{
  restrict:'E',
  templateUrl:'partials/top-menu.html',
  controller: function($scope,$routeParams, $http){
    this.tab=1;
    
    $http.get('barcos/' + 'velero' + '.json').success(function(data) {
      $scope.barco = data;
    });
    
    this.selectTab= function(setTab){
       this.tab=setTab;
    };
    this.isSelected=function(checkTab){
      return this.tab===checkTab;
    };
    
  },
  controllerAs:'panel'

};


}]);