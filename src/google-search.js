var webdriver = require('../lib/selenium/build/javascript/webdriver/webdriver'); // change your path to webdriver module
var driver = new webdriver.Builder()
  .usingServer('http://localhost:4444/wd/hub')
  .withCapabilities({
    'browserName':'firefox',
    'version':'',
    'platform':'ANY',
    'javascriptEnabled':true
  }).build();

driver.get('http://www.google.co.jp/');
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver\n');
driver.wait(function () {
  return driver.getTitle().then(function (title) {
    return title === 'webdriver - Google 検索';
  });
}, 3000);
driver.sleep(1000);
driver.quit();
