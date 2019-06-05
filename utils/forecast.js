const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/6b34798243df8b905c4d0cda3c53e731/${longitude},${latitude}?units=si`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const resp = response.body
            callback(undefined,  resp.daily.data[0].summary + ` It is currently ${resp.currently.temperature} degrees out. There is a ${resp.currently.precipProbability}% chance of rain.`)
        }

    })
}

module.exports = forecast

