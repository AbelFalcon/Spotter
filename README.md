# Spotter

![alt text](https://i.imgur.com/l97VRMP.jpg)

Script designed to continuously monitor changes in the HTML of a website and notify you by email if any changes are detected. With a monitoring frequency of 10 minutes, "Spotter" uses web scraping techniques to compare the current HTML with a previous version and determine if there have been any significant changes.

If a change in the HTML is detected, "Spotter" automatically sends an email to the specified recipient to inform them about the change. This is especially useful for those who need to keep constant track of a website and want to receive an immediate notification when any changes in content occur.

<h2>Installation:</h2>

<p>1. Clone the project</p>

```
git clone https://github.com/SkrrBoy/Shownger
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

<p>Change GMAIL // FROM // TO (index.js)</p>

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
