# Puppeteer Web Navigation

This project uses Puppeteer, a Node.js library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

## Features

- Random wait time: The script includes a function `esperaAleatoria(min, max)` that generates a random wait time between `min` and `max` seconds. This can be useful for simulating human-like interaction delays.
- Web navigation: The script navigates to two different URLs, waiting for a random amount of time between the navigations.
- Page title extraction: The script extracts and logs the title of the second visited page.

## Usage

1. Make sure you have Node.js installed.
2. Clone this repository.
3. Install the project dependencies with `npm install`.
4. Run the script with `node script.js`.

## Code

Here is the main part of the script:

```javascript
const puppeteer = require('puppeteer');

function esperaAleatoria(min, max) {
    const tiempoAleatorio = Math.floor(Math.random() * (max - min + 1) + min) * 1000;
    return new Promise(resolve => setTimeout(resolve, tiempoAleatorio));
}

async function run() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080 ,
        deviceScaleFactor: 1,
      });
    await page.goto("https://fingerprint.com/products/bot-detection/");
    
    await esperaAleatoria(5, 10);
    console.log("Espera ejecutada")
    await page.goto('http://idealista.com');

    const title = await page.$eval('head > title', el => el.innerText);
    console.log(title);
    
    await browser.close();
    console.log('Fin');
}

run();
