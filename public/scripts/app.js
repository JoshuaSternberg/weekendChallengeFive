var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'Home'
        })
        .when('/animal', {
            templateUrl: '/views/templates/animal.html',
            controller: 'Animal'
        })
        .when('/favorites', {
            templateUrl: '/views/templates/favorites.html',
            controller: 'Favorites'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);