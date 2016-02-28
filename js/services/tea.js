app.service('Tea', ['$http', '$q', function($http, $q){
    this.stock = [];
    var that = this;
    var deferred = $q.defer();

    $http.get('../assets/tea.json').then(function(data) {
      this.stock=data;
      console.log('got another http get');
      deferred.resolve(data);
     })
      // this.stock = data.data;
      // console.log('1) Here is the stock: ', this.stock);
      // console.log('2) I initialized the tea service!');


    this.getall = function() {
      console.log('deferred variable: ', deferred);
      console.log('3) did getall');
      console.log('4) stock: ', this.stock);
      return deferred.promise
    }
    // app.service('MyService', ['$http', '$q', function($http, $q) {
    //
    //  this.gotData = function() {
    //    return deferred.promise
    //  }

}])
