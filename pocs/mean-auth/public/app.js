var app = angular.module('MyApp', ['ngRoute', 'ngStorage']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'modules/login/login-view.html',
            controller: 'LoginController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
}]);

app.controller('HomeController', function($scope) {
  console.log('Mean Auth Loaded');
});
