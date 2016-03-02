app.controller('MainController', ['$scope', 'Tea', function($scope, Tea){

  $scope.$Tea = Tea;

  $scope.searchCategory;
  $scope.categories = [];
  $scope.searchCategory=$scope.categories[0];
  $scope.sortPrices=[{name: 'Highest', descend: true}, {name: 'Lowest', descend: false}];
  $scope.selectedSortPrice;
  // $scope.selectedSortPrice = $scope.sortPrices[0];
  // $scope.selectedSortPrice = $scope.sortPrices[0];
  // $scope.sortPrice=$scope.sortPrices[0];

  $scope.searchName;
  $scope.teas;
  $scope.maxQty=20;
  // $scope.quantity=[$scope.maxQty];
  $scope.quantity={};
  // [$scope.maxQty];
  // $scope.quantity[0]=10;
  // $scope.addToCart = function(tea){
  //  Tea.addToCart(tea);
  // }

  var promise = Tea.getTeas();
  promise.then(function(data) {
    $scope.teas = data;
    $scope.categories = Tea.getCategories();
    // Tea.initCart();
  })

}])
