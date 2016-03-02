app.service('ShoppingBag', [function(){
  this.invoice = [];
  var that = this;
    // this.stock = [];

  this.addItems = function(items) {
    items.forEach(function(item) {
      this.invoice[item.name]=this.invoice[item.name] + item.quantity;
    })
  }

  this.getItems = function() {
    return this.invoice;
  }

}])
