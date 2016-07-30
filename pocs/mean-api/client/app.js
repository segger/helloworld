// client/app.js
var app = angular.module('MyApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'modules/home/home-view.html',
                controller: 'HomeController'
            })
            .when('/nerds', {
                templateUrl: 'modules/nerd/nerd-view.html',
                controller: 'NerdController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }]);
