const { checkForChanges } = require("./utils")
const { checkconnection } = require("./discord.js")
require("dotenv").config()

checkconnection()

const refresh_time = process.env.UPDATE_INTERVAL

setInterval(async () => {
  await checkForChanges()
}, refresh_time)
