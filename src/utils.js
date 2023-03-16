const fetch = require('node-fetch')
const fs = require('fs')
const { transporter } = require('./config')

const url = ''

let lastHtml = fs.readFileSync('data/data.html', { encoding: 'utf8' }) ?? null

function sendEmail () {
  const mailOptions = {
    from: 'example@gmail.com',
    to: 'example@gmail.com',
    subject: 'PAGE UPDATE',
    text: 'PAGE UPDATE'
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
      console.log('> Page update detected')
      save(data)
      sendEmail()
    } else {
      console.log('No page changes')
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { checkForChanges }
