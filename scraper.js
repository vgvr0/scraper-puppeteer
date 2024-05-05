const puppeteer = require('puppeteer');

function esperaAleatoria(min, max) {
    // Genera un número aleatorio entre 1000 y 3000 (1 a 3 segundos)
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
    
    browser.close();
    console.log('Fin');
}

run();
