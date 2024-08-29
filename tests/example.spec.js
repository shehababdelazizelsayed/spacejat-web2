// @ts-check
const { test, expect, chromium } = require('@playwright/test');
const { describe } = require('node:test');
let browser;


describe('User Sign-Up', function(){
  test('Create User', async ({ page }) => {
    await page.goto('https://sp1.spacejat.com/auth/createAccount'); // Replace with your sign-up URL
  
    // Fill in the sign-up form using XPath
    const firstName= await page.locator('[id="firstName"]')
    await firstName.type("try")
    const lastName= await page.locator('[id="lastName"]')
    await lastName.type("try")
    const username= await page.locator('[id="username"]')
    await username.type("spacejattrial")
    const email= await page.locator('[id="email"]')
    await email.type("trial@gmail.com")
    const password= await page.locator('[id="password"]')
    await password.type("Try@1234567890")
    const sign_up = await page.locator("//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/button")
    await sign_up.click();
  });
  test('Login',async({page})=>{
    await page.goto('https://sp1.spacejat.com/auth/login'); 
    const UserName= await page.locator('//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/div[1]/div/div/div/div/input')
    await UserName.click();
    await UserName.type("zero")
    const password= await page.locator('//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/div[2]/div/div/div')
    await password.click();
    await password.type("Shehab@#1245")
    //html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/div[2]/div/div/div/div/button/svg
    const Login = await page.locator("//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/button")
    await Login.click();
  })
  test('Create Channel',async({page})=>{
    await page.goto('https://sp1.spacejat.com/auth/login'); 
    const UserName= await page.locator('//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/div[1]/div/div/div/div/input')
    await UserName.click();
    await UserName.type("zero")
    const password= await page.locator('//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/div[2]/div/div/div')
    await password.click();
    await password.type("Shehab@#1245")
    const Login = await page.locator("//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/button")
    await Login.click();
    await page.waitForTimeout(7000);
    const OpenChannel = await page.locator("//html/body/div[2]/main/div/div[2]/div[1]/div[2]/div/div[2]");
    await OpenChannel.click();
    const InputNameOfChannel = await page.locator("//html/body/div[3]/div[2]/section/form/div[1]/div[1]/div[1]/div/div/div/div/input");
    await InputNameOfChannel.click();
    await InputNameOfChannel.type("Try1001");
    const Next = await page.locator("//html/body/div[3]/div[2]/section/form/div[2]/div[2]/button[2]");
    await Next.click();
    const ChatWithTrue = await page.locator("//html/body/div[3]/div[2]/section/form/div[1]/div[3]/div[1]/div/label/span[2]/span");
    await ChatWithTrue.click();
    const Create = await page.locator("//html/body/div[3]/div[2]/section/form/div[2]/div[2]/button[2]");
    await Create.click();
    await page.waitForTimeout(12000);
  })
  test('Send and open Camera in the general channel',async({page})=>{
    const context = await page.context();
    await context.grantPermissions(['microphone', 'camera'], { origin: 'https://sp1.spacejat.com/auth/login' });
    await page.goto('https://sp1.spacejat.com/auth/login'); 
    const UserName= await page.locator('//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/div[1]/div/div/div/div/input')
    await UserName.click();
    await UserName.type("zero")
    const password= await page.locator('//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/div[2]/div/div/div')
    await password.click();
    await password.type("Shehab@#1245")
    const Login = await page.locator("//html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/form/div/button")
    await Login.click();
    await page.waitForTimeout(7000);
    const generalChannel = await page.locator("//html/body/div[2]/main/div/div[1]/div/div[2]/div/div[4]/div/section/div/div/div[1]/div/h5")
    await generalChannel.click();
    const TextInput = await page.locator("//html/body/div[2]/main/div/div[2]/div[2]/div[1]/div[3]/div/div/div/div/div/textarea");
    await TextInput.click();
    await TextInput.type("Hello everyone");
    const sendMessage = await page.locator("//html/body/div[2]/main/div/div[2]/div[2]/div[1]/div[3]/div/div/button");
    await sendMessage.click();
    const OpenCamera = page.locator("//html/body/div[2]/main/div/div[1]/div/div[2]/div[2]/div/div[3]/div/div[1]");
    await OpenCamera.dblclick();
    await page.waitForTimeout(22000);
  })
  test.only('Verification', async ({ page }) => {

    await page.goto('https://tempail.com/'); // Replace with your sign-up URL
    const browser = await chromium.launch();

    const firstNameInput = await page.locator('//html/body/section[1]/div[2]/div/div[2]/div/div/div[1]/input');

    // Get the value of the input
    const firstNameValue = await firstNameInput.inputValue();
    console.log('First Name:', firstNameValue);
    await browser.close();
    
  });

  
})
