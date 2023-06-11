const http = require('http')
const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton, Permissions } = require("discord.js-selfbot-v13");
const Keyv = require('keyv');
const db = new Keyv(`sqlite://db.sqlite`, { table: "database" });
const client = new Client({
  partials: ["CHANNEL"],
  intents: new Intents(32767),
  restTimeOffset: -1000
});
const config = require("./config.json")
const prefix = config.prefix
const log_ch_id = config.log_ch_id

http
  .createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' })
    response.end(`Bot is ready!`)
  })
  .listen(3000)

if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.error('tokenが設定されていません！')
  process.exit(0)
}

client.login(process.env.DISCORD_BOT_TOKEN)
