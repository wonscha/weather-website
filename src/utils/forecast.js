const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=8f21c7512c6a0a57bac44c58a12b08f3&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location.', undefined);
        } else {
            const msg = `It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`
            callback(undefined, msg);
        }
    })
};

module.exports = forecast;