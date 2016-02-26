app.controller('MainController', ['$scope', function($scope){
      $scope.test='HTML and Routes Working';
      // $scope.categories=['awesome', 'cold'];
      $scope.categories=[{name:'awesome'}, {name:'cold'}, {name: 'warm'}, {name: 'hot'}, {name: 'winter'},
      {name: 'spring'}, {name: 'summer'}, {name: 'fall'}, {name: 'dark'}, {name: 'lucid'}];
      $scope.selectedCategory=$scope.categories[0];
      // $sort.choices=[{name: 'cold'}, {name: 'warm'}, {name: 'hot'}, {name: 'winter'}, {name: 'spring'}, {name: 'summer'}, 'fall', 'dark', 'lucid']}]
      //
      // $scope.sortChoices=['Price', 'cold', 'warm', 'hot', 'winter', 'spring', 'summer', 'fall', 'dark', 'lucid']
      $scope.sortPrices=[{name: 'Highest', descend: 'true'}, {name: 'Lowest', descend: 'false'}];
      $scope.selectedSortPrice = $scope.sortPrices[0];
    }])
