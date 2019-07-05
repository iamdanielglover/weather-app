const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv.slice(2, process.argv.length).join(' ')

geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
        return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }

        console.log(location)
        console.log(forecastData)
    })
})
