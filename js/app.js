var app = angular.module('shopping-cartApp', ['ngRoute'])
        app.config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '../partials/index.html',
                    controller: 'MainController'
                })
                .otherwise({redirectTo : '/'})
        })
