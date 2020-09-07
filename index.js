const axios = require('axios');
const cheerio = require ('cheerio') 
const moment = require('moment')
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

let dataText;
let finalDate;

axios.get('https://pathofexile.gamepedia.com/League')
    .then((response) => {
        
        console.log(response)

        const html = response.data;
        
        const $ = cheerio.load(html)

        //Dia pego da tabela
        const data = $('.cargoTable').find('td').next().first()
        dataText = data.text()

        finalDate = moment(dataText).add(90, 'days')

        const day = finalDate.format('DD');
        const month = finalDate.format('MM');
        const year = finalDate.format('YYYY');

        
    }).catch((err) => {
        console.log(err)
    })  

const app = express()
const router = express.Router()


router.get('/', function(req, res) {
    
    const initial = dataText;
    const end = finalDate;

    const day = finalDate.format('DD');
    const month = finalDate.format('MM');
    const year = finalDate.format('YYYY');

    res.render('index', {year, month, day})
})


app.set('view engine', 'ejs')
app.use('/', router)
app.use(expressLayouts)

let porta = process.env.PORT || 3333
app.listen(porta)



    


