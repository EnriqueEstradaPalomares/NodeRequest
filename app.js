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
    console.log('latitud = '+ map.lat +" ||  longitud="+map.lon );

    var api = 'https://api.darksky.net/forecast/e658b4e88db46efa3ee2aa0dbe3ccaac/';
    let urls = api + latitud + "," + latitud;
    request({
        url : urls,
        JSON: true
    },(error, response, body) => {
    var whater = JSON.parse(body);
    console.log('La temperatura es: '+fahrenheitToCelsius(whater.currently.temperature));
    })

    var options = { method: 'GET',
        url: 'https://api.openuv.io/api/v1/uv',
        qs: { lat: latitud, lng: latitud, dt: '2018-01-24T10:50:52.283Z' },
    headers: 
    { 'content-type': 'application/json',
        'x-access-token': 'c8a889badc321dd1075b7da524f31843' } };
    request(options, function (error, response, body) {
    if (error) throw new Error(error);
        var solar = JSON.parse(body)
  

    console.log('La magintud de Rayos UV es: '+solar.result.uv);
    });
})



