// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('signup-exitoso', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('signup-exitoso', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect(1936, 1056)
    await driver.findElement(By.linkText("SIGN IN")).click()
    await driver.findElement(By.name("firstname")).click()
    await driver.findElement(By.name("firstname")).sendKeys("Juan")
    await driver.findElement(By.name("lastname")).click()
    await driver.findElement(By.name("lastname")).sendKeys("Perez")
    await driver.findElement(By.css("div:nth-child(4) > .inputsLog")).click()
    await driver.findElement(By.css("div:nth-child(4) > .inputsLog")).sendKeys("juanperez@gmail.com")
    await driver.findElement(By.css("div:nth-child(1) > .inputsLog")).click()
    await driver.findElement(By.css("div:nth-child(1) > .inputsLog")).sendKeys("Juan123")
    await driver.findElement(By.css(".btnLog:nth-child(6)")).click()
  })
})