# Spotter
<p align="center">
  <img src="https://i.imgur.com/zVIZPQe.png" alt="Logo">
</p>

Script designed to continuously monitor changes in the HTML of a website and notify you by email if any changes are detected. With a monitoring frequency of 10 minutes, "Spotter" uses web scraping techniques to compare the current HTML with a previous version and determine if there have been any significant changes.

If a change in the HTML is detected, "Spotter" automatically sends an email to the specified recipient to inform them about the change. This is especially useful for those who need to keep constant track of a website and want to receive an immediate notification when any changes in content occur.

<h2>Installation:</h2>

<p>1. Clone the project</p>

```
git clone https://github.com/SkrrBoy/Spotter
```

<p>2. Install dependencies</p>

```
npm i
```
OR
```
npm install
```

<h2>Usage:</h2>

<p>Change .env</p>

```
EMAIL_USER = pedro@gmail.com
EMAIL_PASS = skaj231 (Google Aplication Password not normal passwod)
```

<p>Change GMAIL // FROM // TO (/src/index.js)</p>

```
from: "example@gmail.com",
to: "example@gmail.com",
```

<p>Enter the website in the url const (index.js)</p>

```
const url = "";
```

<p>Run</p>

```
node main.js
```
<p> (Optional) Run in background</p>

```
npm install pm2 -g
pm2 start main.js
```
More info > https://pm2.keymetrics.io/docs/usage/quick-start/

<h1>🚀 Future updates</h1>

- [ ] Change the main options without having to edit the files directly
- [ ] Select the CONCRETE element to be analyzed. At the moment it analyzes all the html 
- [ ] Push notification alerts on mobile phones (Switch)

<h1>⚠️ Disclamer</h1>
<p>The purpose of this GitHub repository is solely for personal learning and growth. I have no intention of presenting this project as a replacement or competition to any other existing projects or software. The code and documentation contained within this repository are provided as-is, with no guarantees or warranties of any kind.

While I welcome any contributions, feedback, or suggestions, please understand that this project is not intended to be a fully developed or comprehensive solution. It is simply a platform for me to store and share my learning progress.

Thank you for your understanding and cooperation.</p>
