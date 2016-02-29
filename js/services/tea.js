app.service('Tea', ['$http', '$q', function($http, $q){
    this.stock = [];
    categories = [];
    var that = this;
    var deferred = $q.defer();

    $http.get('../assets/tea.json').then(function(data) {
      this.stock=data;
      for (var i = 0; i < data.data.length; i++) {
        data.data[i].categories.forEach(function(element) {
          categories.push(element)
        })
      }
      categories = _.uniq(categories, function(element) {
        return element
      });
      console.log('categories: ', categories);
      // this.selectedCategory=categories[0]
      deferred.resolve(data);
     })

    this.getCategories = function() {
      return categories
    }

    this.getall = function() {
      return deferred.promise
    }


}])
