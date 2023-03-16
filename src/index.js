const { checkForChanges } = require('./utils')

setInterval(async () => {
  await checkForChanges();
}, 600000); // 10m on ms

