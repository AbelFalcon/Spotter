const { checkForChanges } = require('./utils')
const { checkconnection } = require('./discord.js')

checkconnection()

setInterval(async () => {
  await checkForChanges()
}, 600000) // 10m on ms
