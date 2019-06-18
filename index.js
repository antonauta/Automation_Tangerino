require('chromedriver');
const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

const url = "https://app.tangerino.com.br/Tangerino/pages/LoginPage" 

driver.get(url); 
driver.findElement(webdriver.By.xpath("//a[contains(text(),'Bater Ponto')]")).click();
driver.findElement(webdriver.By.id('codigoEmpregador')).sendKeys('123');
driver.findElement(webdriver.By.id('codigoPin')).sendKeys('123');
//driver.findElement(webdriver.By.id('btnG')).click();
//driver.quit();
