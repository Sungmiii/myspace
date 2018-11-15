import request from 'superagent'

const weather_key = 'd23a65e7504e4f76fb4b84e73086b904'


export const getWeather = (city, country) => {

    const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weather_key}&units=metric}`
    return request.get(weather_url)
        .then(res => {
            return res.body
        })
        .then(weather => {
            console.log('weather api do we get? >>>', weather)
            return weather
        })
}