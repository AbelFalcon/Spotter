const fetch = require('node-fetch')
const fs = require('fs')
const { transporter } = require('./config')

const url = ''
let lastHtml = fs.readFileSync('data/data.html', { encoding: 'utf8' }) ?? null

function sendEmail () {
  const mailOptions = {
    from: 'example@gmail.com',
    to: 'example@gmail.com',
    subject: 'The page has been updated',
    text: url
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error)
    } else {
      console.log('Email has been send. ' + info.response)
    }
  })
}

const save = (newData) => {
  lastHtml = newData
  fs.writeFileSync('data/data.html', lastHtml)
}

async function checkForChanges () {
  try {
    const response = await fetch(url)
    const data = await response.text()
    if (lastHtml === null) {
      save(data)
    } else if (data !== lastHtml) {
      console.log('\x1b[32m%s\x1b[0m', '> The page has been updated')
      save(data)
      sendEmail()
    } else {
      console.log('\x1b[31m%s\x1b[0m', '> There have been no changes')
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { checkForChanges }
