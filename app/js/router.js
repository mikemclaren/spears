angular.module("app").config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    controller: 'HomeController',
    templateUrl: 'home.html'
  });

  $locationProvider.html5Mode(true);

});
