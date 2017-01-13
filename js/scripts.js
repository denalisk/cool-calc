var plus = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var existingText;

var displayText = function(existingText, newText) {
  return existingText + newText;
};

$(document).ready(function() {
  $(".calc-button").click(function() {
    var textInput = $(this).val();
    var existingText = $(".display").text();
    var outputText = existingText + " " + textInput;
    $(".display").text(outputText);

  });
  $(".equals-button").click(function() {
    console.log("you clicked it");
    var input1 = $(".display").text();
    var output1 = input1.replace(/ /g,'');
    var solution = eval(output1);
    console.log(solution);
    $(".answer-display").text(solution);
    $(".display").text("");

  });
  $(".clear-button").click(function() {
    $(".display").text("");
    $(".answer-display").text("");

  });





  $("#multiply").click(function(){
    $("form").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#num1").val());
      var number2 = parseInt($("#num2").val());
      var result = multiply(number1, number2);
      $("#output").text(result);
    });
  });

  $("#plus").click(function(){
    $("form").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#num1").val());
      var number2 = parseInt($("#num2").val());
      var result = plus(number1, number2);
      $("#output").text(result);
    });
  });

  $("#subtract").click(function(){
    $("form").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#num1").val());
      var number2 = parseInt($("#num2").val());
      var result = subtract(number1, number2);
      $("#output").text(result);
    });
  });

  $("#divide").click(function(){
    $("form").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#num1").val());
      var number2 = parseInt($("#num2").val());
      var result = divide(number1, number2);
      $("#output").text(result);
    });
  });

});
