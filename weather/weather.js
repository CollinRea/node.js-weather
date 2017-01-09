const request = require('request');

let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/8e680a6647379e57a01eef57f4bb83f/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        summary: body.currently.summary,
        temperature: body.currently.temperature,
        humidity: body.currently.humidity
      });
    } else {
      callback('Unable to fetch weather.');
    } 
  });
}

module.exports.getWeather = getWeather;
