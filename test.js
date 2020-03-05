// Set PATH stuff for Chrome to work
let chrome = require('selenium-webdriver/chrome');
let chrome_driver = require('chromedriver');
chrome.setDefaultService(new chrome.ServiceBuilder(chrome_driver.path).build());

const {Builder, By, Key, until, Capabilities} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().withCapabilities(Capabilities.chrome()).forBrowser('chrome').build();

    try {
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
        await driver.quit();
    }
})();

console.log('EUREKA');