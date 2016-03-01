app.service('Tea', ['$http', '$q', function($http, $q){
    stock = [];
    // this.stock = [];
    categories = [];
    cart =[];
    var that = this;
    var deferred = $q.defer();

    $http.get('../assets/tea.json').then(function(data) {
      stock=data;
      // this.stock=data;
      for (var i = 0; i < data.data.length; i++) {
        data.data[i]["quantity"]=0;
        data.data[i].categories.forEach(function(element) {
          categories.push(element)
        })
      }
      categories = _.uniq(categories, function(element) {
        return element
      });
      // this.selectedCategory=categories[0]
      deferred.resolve(data);
     })

    this.getCategories = function() {
      return categories
    }

    this.getTeas = function() {
      return deferred.promise
    }

    this.addToCart = function(tea) {
      var index = cart.findIndex(cartTea => cartTea.name==tea.name)
      if (index==-1)
        cart.push(tea)
      else
        cart[index].quantity+=tea.quantity;
    }

    this.removeFromCart = function(tea) {
      var index = that.cart.findIndex(cartTea => cartTea.name==tea.name)
      cart.splice(index, 1);
      var index = stock.findIndex(stockTea => stockTea.name==tea.name)
      stock[index].quantity=0;
    }

    this.getCart = function() {
      console.log('cart in service: ', cart);
      return cart
    }


}])
