//const pool = require('../public/psql');
//const conexion = require('../public/psql');
const controller = {}
const axios = require('axios')
const https = require('https')

controller.newsdesc = async (req, res) => {
    let articletitle= req.query.title
    try {
        var url = 'https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=ba9685b30ea64d96a1cff75858836877';
        const news_get = await axios.get(url)
        const newsdefFil = news_get.data.articles.filter((article)=> article.title==articletitle)
        res.render('newsdesc.ejs',{ articles: newsdefFil })

    } catch (error) {
        if (error.response) {
            console.log(error)
        }

    }
}


const urlweather = 'https://api.openweathermap.org/data/2.5/weather?q=Cali&appid=c999d2ffc6bff8c6ccd752f42fa9da85';

controller.news = async (req, res) => {
    try {
        await https.get(urlweather, function(response){
            response.on("data", function(data){
                const weatherData  = JSON.parse(data)
                const temp = weatherData.main.temp;
                const des = weatherData.weather[0].description;
                console.log(des)
                res.render('index.ejs', { des ,temp })
            })
        })
        var url = 'https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=ba9685b30ea64d96a1cff75858836877';
        // const news_get = await axios.get(url)
        // res.render('index.ejs', { articles: news_get.data.articles })
        // res.render('index.ejs', { temp, desc})
    } catch (error) {
        if (error.response) {
            console.log(error)
        }

    }
}
module.exports = controller;
