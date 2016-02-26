var app = angular.module('shoppingCartApp', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../partials/index.html',
            controller: 'MainController'
        })
        .otherwise({redirectTo : '/'})
})
