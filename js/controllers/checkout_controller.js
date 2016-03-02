app.controller('CheckoutController', ['$scope', 'Tea', function($scope, Tea){

  $scope.$Tea = Tea;
  $scope.cart;
  $scope.teas;
  $scope.categories;
  // $scope.maxQty=20;
  // $scope.quantity=[$scope.maxQty];
  // $scope.quantity={};
  // [$scope.maxQty];
  // $scope.quantity[0]=10;

  // var promise = Tea.getall();
  //   promise.then(function(data) {
  //   $scope.teas = data.data;
  // })

  var promise = Tea.getTeas();
  promise.then(function(data) {
    $scope.teas = data.data;
    $scope.categories = Tea.getCategories();
    $scope.cart = Tea.getCart();
    console.log('teas: ', $scope.teas);
    console.log('scope cart', $scope.cart);
  })

}])
