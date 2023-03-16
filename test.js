const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const nodemailer = require("nodemailer");
const fs = require('fs')
require("dotenv").config();

const url = "";

let lastHtml = fs.readFileSync('data.html', { encoding: 'utf8'}) ?? null;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function sendEmail() {
  const mailOptions = {
    from: "megaomega175@gmail.com",
    to: "abelfalconespino@gmail.com",
    subject: "Se ha detectado un cambio en la página",
    text: "Se ha detectado un cambio en la página",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Correo electrónico enviado: " + info.response);
    }
  });
}

const save = (newData) => {
  lastHtml = newData
  fs.writeFileSync('data.html', lastHtml)
}

async function checkForChanges() {
  try {
    const response = await fetch(url);
    const data = await response.text();
    if (lastHtml === null) {
      save(data)
    } else if (data !== lastHtml) {
      console.log("Se ha detectado un cambio en la página");
      save(data)
      sendEmail();
    } else {
      console.log("No hay cambios en la página");
    }
  } catch (error) {
    throw new Error(error);
  }
}

setInterval(async () => {
  await checkForChanges();
}, 30000);


