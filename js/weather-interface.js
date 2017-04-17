var apiKey = "0978fa3dfd279e09a748a735d11c976a";

$(document).ready(function(){
  $("#weather-location").click(function(){
    var city = $("#location").val();
    $("#location").val("");
    $(".showWeather").text("The city you have chosen is " + city + ".");
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey, function(response){
      $(".showWeather").text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
});
