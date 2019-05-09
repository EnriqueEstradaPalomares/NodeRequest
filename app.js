var request = require('request');
var fahrenheitToCelsius = require('fahrenheit-to-celsius');
var latitud
var longitud

let url = 'https://us1.locationiq.com/v1/search.php?key=2bdde5bfc7bd04&q= 1053 calle Vicente Lombardo Toledano colima colima&format=json';
request({
    url : url,
    JSON: true
},(error, response, body) =>{
    var map  = JSON.parse(body);
    map = map[0];
    latitud = map.lat;
    longitud = map.lon;
    console.log(map.lat +" ||  "+map.lon );

    var api = 'https://api.darksky.net/forecast/e658b4e88db46efa3ee2aa0dbe3ccaac/';
    let urls = api + latitud + "," + longitud;
    console.log(urls);
    request({
        url : urls,
        JSON: true
    },(error, response, body) => {
    var whater = JSON.parse(body);
    console.log(fahrenheitToCelsius(whater.currently.temperature));
    })
})



