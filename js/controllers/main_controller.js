// (function() {
app.controller('MainController', ['$scope', 'Tea', function($scope, Tea){
  $scope.test='HTML and Routes Working';
  // $scope.categories=['awesome', 'cold'];
  $scope.categories=[{name:'awesome'}, {name:'cold'}, {name: 'warm'}, {name: 'hot'}, {name: 'winter'},
  {name: 'spring'}, {name: 'summer'}, {name: 'fall'}, {name: 'dark'}, {name: 'lucid'}];
  $scope.searchCategory=$scope.categories[0];
  //
  $scope.sortPrices=[{name: 'Highest', descend: 'true'}, {name: 'Lowest', descend: 'false'}];
  $scope.selectedSortPrice = $scope.sortPrices[0];
  $scope.searchName;
  $scope.teas;

  Tea.getall().then(function(data) {
    console.log('got to getall');
    $scope.teas = data;
    console.log('tea: ', $scope.teas);
  })

}])

// })();
