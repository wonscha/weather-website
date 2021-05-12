const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const api_key = '8f21c7512c6a0a57bac44c58a12b08f3'
    const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location.', undefined);
        } else {
            const msg = `It is currently ${body.current.temperature} degrees out. ${body.current.cloudcover}% of sky is covered with cloud.`
            callback(undefined, msg);
        }
    })
};

module.exports = forecast;