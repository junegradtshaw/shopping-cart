app.controller('CheckoutController', ['$scope', 'Tea', function($scope, Tea){
  $scope.categories=[{name:'awesome'}, {name:'cold'}, {name: 'warm'}, {name: 'hot'}, {name: 'winter'},
  {name: 'spring'}, {name: 'summer'}, {name: 'fall'}, {name: 'dark'}, {name: 'lucid'}];
  $scope.invoice=[];
  $scope.teas;
  $scope.maxQty=20;
  // $scope.quantity=[$scope.maxQty];
  $scope.quantity={};
  // [$scope.maxQty];
  // $scope.quantity[0]=10;

  var promise = Tea.getall();
    promise.then(function(data) {
    $scope.teas = data.data;
  })

}])
