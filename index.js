const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/accounts/login/');
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', 'USERNAME');
  await page.type('input[name="password"]', 'PASSWORD');
  await page.click('button[type="submit"]');
  await page.waitFor(2000);
  await page.waitForSelector('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(4)');
  await page.click('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(4)');
  await page.waitFor(2000);
  await page.waitForSelector('#react-root > section > main > div > header > section > ul > li:nth-child(3) > a');
  await page.click('#react-root > section > main > div > header > section > ul > li:nth-child(3) > a');

  for (let i = 1; i < 13; i++){
    await page.waitFor(1000);
    await page.click(`body > div.RnEpo.Yx5HN > div > div.isgrP > ul > div > li:nth-child(${i}) > div > div.Igw0E.rBNOH.YBx95.ybXk5._4EzTm.soMvl > button`);
    await page.waitFor(700);
    await page.keyboard.press("Tab");
    await page.waitFor(100);
    await page.keyboard.press("Enter");
    await page.waitFor(500);
    console.log(`Unfollowed user ${i}`);
  }

  console.log('Starting second loop');
  await page.waitFor(2000); 

  //open followers again
  await page.waitForSelector('#react-root > section > main > div > header > section > ul > li:nth-child(3) > a');
  await page.click('#react-root > section > main > div > header > section > ul > li:nth-child(3) > a');
  await page.pdf({path: 'puta.pdf', format: 'A4'});

  for (let e = 14; e < 100; e++){
    await page.waitFor(1000); 
    await page.click(`body > div.RnEpo.Yx5HN > div > div.isgrP > ul > div > li:nth-child(${e}) > div > div.Pkbci > button`);
    await page.waitFor(700);
    await page.keyboard.press("Tab");
    await page.waitFor(100);
    await page.keyboard.press("Enter");
    await page.waitFor(500);
    console.log(`Unfollowed user ${e}`);
  }

  // Add a wait for some selector on the home page to load to ensure the next step works correctly
  await page.pdf({path: 'page.pdf', format: 'A4'});
  await browser.close();
})();