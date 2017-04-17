var Calculator = require("./../js/pingpong.js").calculatorModule;

$(document).ready(function(){
  $("#calculator-form").submit(function(){
    event.preventDefault();
    var goal = $("#goal").val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element){
      $("#solution").append("<li>" + element + "</li>");
    });
  });
});
