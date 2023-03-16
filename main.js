const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const nodemailer = require("nodemailer");
require("dotenv").config();

const url = "http://127.0.0.1:5500/";
let first = "";

const test = () => {
    fetch(url)
      .then((res) => res.text())
      .then((first) => {
      });
  }

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

function checkForChanges() {
  fetch(url)
    .then((res) => res.text())
    .then((second) => {
      if (second !== first) {
        console.log("Se ha detectado un cambio en la página");
        first = second;
        sendEmail();
      } else {
        console.log("No hay cambios en la página");
      }
    })
    .catch((err) => console.error(err));
}

setInterval(() => {
  checkForChanges();
}, 3000);
