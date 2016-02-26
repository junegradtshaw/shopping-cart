app.service('Tea', ['$http', function($http){
  return {
    getall: function() {
      console.log('starting getall');
      return $http.get('../assets/tea.json')
    }
  }
}])
