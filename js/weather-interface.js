var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#weather-location").click(function(){
    var city = $("#location").val();
    $("#location").val("");
    $(".showWeather").text("The city you have chosen is " + city + ".");

    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
      .then(function(response){
        // console.log(response.responseJSON.message);
        // // console.log(error.responseJSON.message);
        $(".showWeather").text("The humidity in " + city + " is " + response.main.humidity + "%");
      })

      .fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
  });
});
