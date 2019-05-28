const request = require('request')

const apiKey = '28541013b859564d941922ad28c80cd4'

const url = `https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`


request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})
