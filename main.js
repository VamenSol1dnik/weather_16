$("#getWeatherBtn").on("click", function () {
    var city = $("#cityInput").val(); 
    var apiKey = "2188b22cf9c06e9d34b85de3cbb5a6da"; 
    
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`, 
      method: "GET",
      success: function (weather) {
        
        $("#temperature").text(weather.main.temp + "°C");
        $("#humidity").text(weather.main.humidity + "%");
        $("#windSpeed").text(weather.wind.speed + " м/с");
        $("#pressure").text(weather.main.pressure + " Па");
        $("#windDeg").text(weather.wind.deg + " °");
      },
      error: function () {
        $("#weatherInfo").html("Ошибка при получении погоды");
      },
    });
  });