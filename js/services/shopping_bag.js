app.service('ShoppingBag', [function(){
  this.invoice = [];
  var that = this;
    // this.stock = [];

  this.addItems = function(items) {
    items.forEach(function(item) {
      this.invoice[item.name]=this.invoice[item.name] + item.quantity;
      console.log('item to add to invoice: ', item);
    })
  }

  this.getItems = function() {
    return this.invoice;
  }

}])
