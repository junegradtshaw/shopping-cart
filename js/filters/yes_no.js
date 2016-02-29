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
