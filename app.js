const express = require('express');
// const { chromium } = require('playwright');

const app = express();

app.get("/", async function(req, res) {

    // const browser = await chromium.launch();

    // const page = await browser.newPage();
    
    // await page.goto('https://www.cineplanet.com.pe/cinemas/cp-alcazar');

    // const element = await page.waitForSelector('.cinemas-details--header');

    // await browser.close();
    
    res.send("Bienvenido a la api de crawlers");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});