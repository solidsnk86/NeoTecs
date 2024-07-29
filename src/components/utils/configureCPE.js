import { Builder, By, Key } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import path from 'path';

async function configureCPE(ip, username, password) {
  const options = new chrome.ServiceBuilder(
    path.resolve('/chromedriver-win64/chromedriver.exe'),
  );

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.get(`http://${ip}`);

    await driver.findElement(By.id('details-button')).click();
    await driver.findElement(By.id('proceed-link')).click();
    await driver.findElement(By.name('username')).sendKeys(username);
    await driver
      .findElement(By.name('password'))
      .sendKeys(password, Key.RETURN);

    await driver.get(`http://${ip}`);
    const parameterInput = await driver.findElement(By.name('parameter_name'));
    await parameterInput.clear();
    await parameterInput.sendKeys('new_value');
    await driver.findElement(By.name('save')).click();

    await driver.sleep(2000);
  } catch (error) {
    throw new Error('Something stupid it´s be happen...');
  } finally {
    await driver.quit();
  }
}

export default configureCPE;
