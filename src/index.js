const { checkForChanges } = require('./utils')

setInterval(async () => {
  await checkForChanges()
}, 3000)
