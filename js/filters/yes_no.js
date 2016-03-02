app.filter('YesNo', function() {
  return function(input) {
    return input ? "Yes" : "No";
  }
});

app.filter('CurrencyCoin', function() {
  return function(input) {
    return input/100;
  }
});

// app.filter('BagTotal', function() {
//   return function(input) {
//     return ("(" )
//   }
// }
