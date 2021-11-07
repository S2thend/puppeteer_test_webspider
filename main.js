const puppeteer = require('puppeteer');

(
  async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.tianyancha.com');
    // await page.screenshot({path: 'example.png'});

    await page.waitForSelector('#home-main-search')

    await page.$eval('#home-main-search', (el) => el.value = "阿里巴巴")

    await page.waitForSelector('.input-group-btn')

    await page.click('.input-group-btn')

    await console.log(page.url())

    await page.waitForSelector('div.content > div.header > a.name')

    const eh = await page.$('div.content > div.header > a.name')
    const href = await eh.getProperty("href");

    console.log(href._remoteObject.value)


    await page.goto(href._remoteObject.value);

    await console.log(page.url())


    await page.waitForTimeout(30000)
    await browser.close();
  }
)();