var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=new+york&appid=0a24d823e5f48003c6b67116f14c5541";
  console.log(queryURL);
  // ajax function that requests information from the OpenWeather API 
  $.ajax({
    url: queryURL,
    method: "GET"
  })
// once response is given from the OpenWeahter API do all this stuff 
  .done(function(response) {
    // get the data from response and store it in variable weatherData
    var weatherData = response;
      console.log(weatherData);

    // loop through the weatherData 
      for (i = 0; i < weatherData.list.length; i++){

        console.log(weatherData.list[i]);
        // create p tag
        var option = $("<option>");
        //add class of rating to p tags
        $(option).attr("value",weatherData.list[i].dt_txt);
        console.log(weatherData.list[i].dt_txt);
        // add text to p tag 
        option.text(weatherData.list[i].main.pressure);
        console.log(weatherData.list[i].main.pressure);
        // put the p tag information into the div
        $("#pressure").prepend(option);
};
});

