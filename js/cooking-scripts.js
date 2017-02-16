// Business (or back-end) logic:
var liter = function(gal) {
  return gal * 3.785411784;
}

var gallons = function(liters) {
  return liters / 3.785411784;
}

var celsius = function(fahrenheit) {
  return (fahrenheit - 32) * .5556;
}

var fahrenheit = function(celsius) {
  return (celsius * 1.8) + 32;
}


// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#gal-to-lit").submit(function(event) {
    event.preventDefault();
    var gal = parseInt($("#gals").val());
    var result = liter(gal).toFixed(2);
    $("#gal-lit-output").text(result);
    $ ("#gal-to-lit-result").show();
  });

  $("form#lit-to-gal").submit(function(event) {
    event.preventDefault();
    var lit = parseInt($("#lit").val());
    var result = gallons(lit).toFixed(2);
    $("#lit-gal-output").text(result);
    $ ("#lit-to-gal-result").show();
  });

  $("form#fah-to-cels").submit(function(event) {
    event.preventDefault();
    var fahrenheit = parseInt($("#fah").val());
    var result = celsius(fahrenheit).toFixed(2);
    $("#fah-cels-output").text(result);
    $ ("#fah-to-cels-result").show();
  });

  $("form#cels-to-fah").submit(function(event) {
    event.preventDefault();
    var celsius = parseInt($("#cels").val());
    var result = fahrenheit(celsius).toFixed(2);
    $("#cels-fah-output").text(result);
    $ ("#cels-to-fah-result").show();
  });

});
