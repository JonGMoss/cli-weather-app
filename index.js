const request = require('request');
const argv    = require('yargs').argv;

let apiKey = process.env.OWAAPIKEY;
let city = argv.city || process.env.CITY || 'reading';
let countrycode = argv.country || process.env.COUNTRY || 'GB';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countrycode}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)

        let message = `It's ${weather.main.temp} degrees in ${weather.name} ${weather.sys.country}`;

        console.log(message);
    }
});

