var app = angular.module('shoppingCartApp', ['ngRoute'])
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../partials/index.html',
                controller: 'MainController'
            })
            .when('/checkout', {
                templateUrl: '../partials/checkout.html',
                controller: 'CheckoutController'
            })
            .otherwise({redirectTo : '/'})
    })

    app.run(['Tea', function (Tea) {
      Tea.init();
    }])
