$(document).ready(function()  {
    //get location
    navigator.geolocation.getCurrentPosition(success,error);
    function success(pos){
        var lot = pos.coords.latitude;
        var long=pos.coords.longitude;
        weather(lot,long);

    }
    function error(){
        console.log('error');
    }
    function weather(lot, long) {
        var URL= `https://fcc-weather-api.glitch.me/api/current?lat=${lat}.70&lon=${long}`;
        $.getJSON(URL, function(data){
            console.log(data);
            updateDOM();

        });

    }
    function updateDOM(){
        var city = data.name;
        var temp= Math.round(data.main.temp);
        var desc=data.weather[0].description;
        var icon=data.weather[0].icon;
        var wind=data.weather[0].wind;

        $('#city').html(city);
        $('#temp').html(temp);
        $('#desc').html(desc);
        $('#icon').attr('src',icon);
        $('#wind').html(wind);




    }


});