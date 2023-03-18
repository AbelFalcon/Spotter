const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] })
require('dotenv').config()

async function checkconnection () {
  try {
    await client.login(process.env.TOKEN)
    console.log('[+] El bot de Discord esta Funcionando ...')
    return true
  } catch (error) {
    console.log('[-] El bot de Discord esta inactivo ...')
    return false
  }
}

async function sendMsg () {
  try {
    const channel = await client.channels.fetch('') // Specifies the id of the channel to receive the message.
    if (!channel) {
      throw new Error('Channel not found.')
    }
    await channel.send('The page has been updated')
    console.log('Discord Message Send')
  } catch (error) {
    console.error('Not using discord')
  }
}

module.exports = { checkconnection, sendMsg }
