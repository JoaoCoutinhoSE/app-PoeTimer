const axios = require('axios');
const cheerio = require ('cheerio') 
const moment = require('moment')
const countdown = require('countdown')
const momentCountdown = require('moment-countdown');

axios.get('https://pathofexile.gamepedia.com/League')
    .then((response) => {
        

        const html = response.data;
        
        const $ = cheerio.load(html)

        //Dia pego da tabela
        const data = $('.cargoTable').find('td').next().first()
        const dataText = data.text()

        console.log(dataText)

        const finalDate = moment(dataText).add(90, 'days')

        const day = finalDate.format('DD');
        const month = finalDate.format('MM');
        const year = finalDate.format('YYYY');

        

        console.log(diffTime)

        console.log(year + '-' + month + '-' + day);
        /* const a = moment(finalDate).countdown().toString()

        const duration = moment.duration(finalDate * )
        const interval = 1000



        setInterval(()=> {
            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds')
            finalDate.text(moment(duration.asMilliseconds()).format)
        }) */

        // Dummy Code
        /*const $ = cheerio.load(response)
        
        const divName = $('.field_release_date td')
        const divNameText = divName.text()

        console.log(divNameText)*/
        
        /*let nome_liga = $("table")[0].children[1].children[0].cells[0].innerText;
        let data_inicio = $("table")[0].children[1].children[0].cells[1].innerText;
        let data_fim = $("table")[0].children[1].children[0].cells[2].innerText;
        let versao = $("table")[0].children[1].children[0].cells[3].innerText;
        console.log("Liga: " + nome_liga);
        console.log("data_inicio: " + data_inicio);
        console.log("data_fim: " + data_fim);
        console.log("versao: " + versao);*/
    })

    


