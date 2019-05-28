const request = require('request')

const apiKey = '28541013b859564d941922ad28c80cd4'
const url = `https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`

request({ url: url, json: true }, (error, response) => {
    // console.log((response.body.currently.temperature - 32) * 0.5556)
    // console.log(makeCelcius(response.body.currently.temperature))
    // console.log(response.body.currently)
    
    const resp = response.body.currently 

    console.log(`It is currently ${resp.temperature} degrees out. There is a ${resp.precipProbability}% chance of rain.`)
})

const makeCelcius = (tempInF) => {
    const tempInC = (tempInF - 32) * 0.5556
    return tempInC
}

