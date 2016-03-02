app.service('Tea', ['$http', '$q', function($http, $q){
    stock = [];
    categories = [];
    this.cart;
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

    this.init = function() {
      cart = [];
    }

    this.addToCart = function(tea) {
      console.log('in addToCart');
      var index = cart.findIndex(cartTea => cartTea.name==tea.name)
      if (index==-1)
        cart.push(tea)
      else
        cart[index].quantity+=tea.quantity;
    }

    this.removeFromCart = function(tea) {
      console.log('cart before: ', cart);
      var index = cart.findIndex(cartTea => cartTea.name==tea.name)
      cart.splice(index, 1);
      console.log('cart before: ', cart);
      console.log('stock before: ', stock);
      var index = stock.findIndex(stockTea => stockTea.name==tea.name)
      stock[index].quantity=0;
      console.log('stock after: ', stock);
    }

    this.getCart = function() {
      console.log('cart in service: ', cart);
      return cart
    }

    this.getTotalItems = function() {
      console.log('in getTotalItems');
      var count = 0;
      for (var i = 0; i < cart.length; i++) {
        count += cart[i].quantity;
      }
      console.log('count returned: ', count);
      return count;
    }


}])
