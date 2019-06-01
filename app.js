const request = require('request')

// const url = 'https://api.darksky.net/forecast/6b34798243df8b905c4d0cda3c53e731/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const resp = response.body
//         console.log(resp.daily.data[0].summary + ` It is currently ${resp.currently.temperature} degrees out. There is a ${resp.currently.precipProbability}% chance of rain.`)
//     }

// })

// User gives Address -> api finds Lat/Long -> send Lat/Long to darksky to provide Weather

const mapBoxToken = 'pk.eyJ1IjoiZGFuaWVsZ2xvdmVyOTMiLCJhIjoiY2p3N3o5YTNzMmNhMzQzcGxtbWh6b3BwNCJ9.oA0Ag1WgcJV70nCavGG39g'

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapBoxToken}&limit=1`

request({url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect you to our GPS services.')
    } else if (!response.body.features.length) {
        console.log("Unable to find your location, try with another query.")
    } else {
        const data = response.body.features[0].center
        // console.log(data)
        console.log(`Longitude: ${data[0]}\nLatitude: ${data[1]}`)
    }

})
