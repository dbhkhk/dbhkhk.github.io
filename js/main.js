angular.module('myApp', ['ngRoute'])
 
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'HomeController',
      templateUrl:'../template/home.html'
    })
    .when('/work', {
      controller:'WorkController',
      templateUrl:'../template/work.html'
    })
    .when('/contact', {
      controller:'ContactController',
      templateUrl:'../template/contact.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})
 
.controller('HomeController', ['$scope', function($scope) {

}])
 
.controller('WorkController', ['$scope', function($scope) {

}])

 
.controller('ContactController', ['$scope', function($scope) {

}]);