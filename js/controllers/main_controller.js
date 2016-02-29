// (function() {
// app.controller('MainController', ['$scope', 'Tea', 'Currencycoin', function($scope, Tea, Currencycoin) {
app.controller('MainController', ['$scope', 'Tea', function($scope, Tea){
// app.controller('MainController', ['$scope', 'Tea', 'YesNo', 'Range', function($scope, Tea, YesNo, Range){
  // $scope.test='HTML and Routes Working';
  // $scope.categories=[{category:'awesome'}, {category:'cold'}, {category: 'warm'}, {category: 'hot'}, {category: 'winter'},
  // {category: 'spring'}, {category: 'summer'}, {category: 'fall'}, {category: 'dark'}, {category: 'lucid'}];
  $scope.searchCategory;
  $scope.categories = [];
  $scope.searchCategory=$scope.categories[0];
  $scope.sortPrices=[{name: 'Highest', descend: 'true'}, {name: 'Lowest', descend: 'false'}];
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

  var promise = Tea.getall();
    promise.then(function(data) {
    $scope.teas = data.data;
    $scope.categories = Tea.getCategories();
  })

}])
