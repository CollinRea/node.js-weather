// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('h', 'help')
//   .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, null, 2));
//   }
// });

// dark sky API key
// 8e6801a6647379e57a01eef57f4bb83f


const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/8e6801a6647379e57a01eef57f4bb83f/33.8363126,-84.38574419999999',
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather.');
  } 
});

