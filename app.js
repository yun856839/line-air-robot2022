const express = require('express')
const app = express()
const linebot = require('linebot')
const axios = require('axios')

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const apiKEY = process.env.API_KEY
const apiURL = `https://data.epa.gov.tw/api/v2/aqx_p_432?api_key=${apiKEY}`

const bot = linebot({
	channelId: process.env.CHANNEL_ID,
	channelSecret: process.env.CHANNEL_SECRET,
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
})
const linebotParser = bot.parser()

bot.on('message', async function (event) {
	let msg = ''
	let air = await axios.get(apiURL)

	console.log(air.data.records)

	for (let i in air.data.records) {
		if (air.data.records[i].sitename.includes(event.message.text)) {
			msg += `${air.data.records[i].sitename} , ${air.data.records[i].status} , ${air.data.records[i].pollutant}\n`
		}
	}
	msg ? event.reply(`${msg}`) : event.reply('找不到資料，可能文字輸入錯誤')
})

app.post('/linewebhook', linebotParser)

app.listen(PORT, () => {
	console.log(`Sever is running on ${PORT}`)
})
