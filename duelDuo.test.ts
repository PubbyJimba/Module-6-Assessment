
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking the Draw button displays a div with the id = "choices"',async () => {
    const draw = driver.findElement(By.id('draw'))
    await draw.click()
    const choices = driver.findElement(By.id('choices'));
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking Add to Duo button displays the div with id = “player-duo”',async () => {
    const draw = driver.findElement(By.id('draw'))
    await draw.click()
    driver.sleep(2000)
    const add = driver.findElement(By.className('bot-btn'))
    await add.click()
    driver.sleep(2000)
    const div = driver.findElement(By.id('player-duo'))
    const displayed = await div.isDisplayed()
    expect(displayed).toBe(true)
})