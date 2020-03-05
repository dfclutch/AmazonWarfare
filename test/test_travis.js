console.log('######################################################################################################################################################');
console.log('Beginning Selinium Testing on Travis CI Github');

// Set PATH stuff for Chrome to work
let chrome = require('selenium-webdriver/chrome');
let chrome_driver = require('/home/travis/build/AmazonWarfare/Matchbook/node_modules/chromedriver');
chrome.setDefaultService(new chrome.ServiceBuilder(chrome_driver.path).build());

const {Builder, By, Key, until, Capabilities} = require('selenium-webdriver');

const chromeCapabilities = Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage', '--disable-setuid-sandbox']});

(async function test_selenium_functioning() {
    let test_state = 0
    let error

    console.log('######################################################################################################################################################');
    console.log('Executing test: test_selenium_functioning');

    let driver

    try {
        driver = chrome.Driver.createSession(chromeCapabilities);

        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

        console.log('test_selenium_functioning PASSED');
        console.log('######################################################################################################################################################');
    } catch (err) {
        test_state = 1
        error = err
    } finally {
        await driver.quit();

        if (test_state == 1) {
            console.log('test_selenium_functioning FAILED');
            console.log('######################################################################################################################################################');
            throw error
        }
    }
})();