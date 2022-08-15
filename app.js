const express = require('express')
const app = express()
const linebot = require('linebot')

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const bot = linebot({
	channelId: process.env.CHANNEL_ID,
	channelSecret: process.env.CHANNEL_SECRET,
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
})
const linebotParser = bot.parser()
bot.on('message', function (event) {
	event
		.reply(event.message.text)
		.then(function (data) {
			console.log('success', data) // success
		})
		.catch(function (error) {
			console.log('success', error) // error
		})
})

app.get('/', (req, res) => {
	res.send('hello----')
})

app.post('/linewebhook', linebotParser)

app.listen(PORT, () => {
	console.log(`Sever is running on ${PORT}`)
})
