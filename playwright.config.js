const { defineConfig, devices } = require('@playwright/test');
const moreProjects = [
  { name: 'Galaxy S9+', use: { ...devices['Galaxy S9+'] } },
  { name: 'Blackberry PlayBook', use: { ...devices['Blackberry PlayBook'] } },
  { name: 'Microsoft Lumia 950', use: { ...devices['Microsoft Lumia 950'] } },
  { name: 'Nexus 5X', use: { ...devices['Nexus 5X'] } },
  { name: 'Kindle Fire HDX', use: { ...devices['Kindle Fire HDX'] } },
  { name: 'Blackberry PlayBook landscape', use: { ...devices['Blackberry PlayBook landscape'] } },
  { name: 'BlackBerry Z30', use: { ...devices['BlackBerry Z30'] } },
  { name: 'BlackBerry Z30 landscape', use: { ...devices['BlackBerry Z30 landscape'] } },
  { name: 'Galaxy Note 3', use: { ...devices['Galaxy Note 3'] } },
  { name: 'Galaxy Note 3 landscape', use: { ...devices['Galaxy Note 3 landscape'] } },
  { name: 'Galaxy Note II', use: { ...devices['Galaxy Note II'] } },
  { name: 'Galaxy Note II landscape', use: { ...devices['Galaxy Note II landscape'] } },
  { name: 'Galaxy S III', use: { ...devices['Galaxy S III'] } },
  { name: 'Galaxy S III landscape', use: { ...devices['Galaxy S III landscape'] } },
  { name: 'Galaxy S5', use: { ...devices['Galaxy S5'] } },
  { name: 'Galaxy S5 landscape', use: { ...devices['Galaxy S5 landscape'] } },
  { name: 'Galaxy S8', use: { ...devices['Galaxy S8'] } },
  { name: 'Galaxy S8 landscape', use: { ...devices['Galaxy S8 landscape'] } },
  { name: 'Galaxy S9+ landscape', use: { ...devices['Galaxy S9+ landscape'] } },
  { name: 'Galaxy Tab S4', use: { ...devices['Galaxy Tab S4'] } },
  { name: 'Galaxy Tab S4 landscape', use: { ...devices['Galaxy Tab S4 landscape'] } },
  { name: 'iPad (gen 5)', use: { ...devices['iPad (gen 5)'] } },
  { name: 'iPad (gen 5) landscape', use: { ...devices['iPad (gen 5) landscape'] } },
  { name: 'iPad (gen 6)', use: { ...devices['iPad (gen 6)'] } },
  { name: 'iPad (gen 6) landscape', use: { ...devices['iPad (gen 6) landscape'] } },
  { name: 'iPad (gen 7)', use: { ...devices['iPad (gen 7)'] } },
  { name: 'iPad (gen 7) landscape', use: { ...devices['iPad (gen 7) landscape'] } },
  { name: 'iPad Mini', use: { ...devices['iPad Mini'] } },
  { name: 'iPad Mini landscape', use: { ...devices['iPad Mini landscape'] } },
  { name: 'iPad Pro 11', use: { ...devices['iPad Pro 11'] } },
  { name: 'iPad Pro 11 landscape', use: { ...devices['iPad Pro 11 landscape'] } },
  { name: 'iPhone 6', use: { ...devices['iPhone 6'] } },
  { name: 'iPhone 6 landscape', use: { ...devices['iPhone 6 landscape'] } },
  { name: 'iPhone 6 Plus', use: { ...devices['iPhone 6 Plus'] } },
  { name: 'iPhone 6 Plus landscape', use: { ...devices['iPhone 6 Plus landscape'] } },
  { name: 'iPhone 7', use: { ...devices['iPhone 7'] } },
  { name: 'iPhone 7 landscape', use: { ...devices['iPhone 7 landscape'] } },
  { name: 'iPhone 8', use: { ...devices['iPhone 8'] } },
  { name: 'iPhone 8 landscape', use: { ...devices['iPhone 8 landscape'] } },
  { name: 'iPhone 8 Plus', use: { ...devices['iPhone 8 Plus'] } },
  { name: 'iPhone 8 Plus landscape', use: { ...devices['iPhone 8 Plus landscape'] } },
  { name: 'iPhone SE', use: { ...devices['iPhone SE'] } },
  { name: 'iPhone SE landscape', use: { ...devices['iPhone SE landscape'] } },
  { name: 'iPhone X', use: { ...devices['iPhone X'] } },
  { name: 'iPhone X landscape', use: { ...devices['iPhone X landscape'] } },
  { name: 'iPhone XR', use: { ...devices['iPhone XR'] } },
  { name: 'iPhone XR landscape', use: { ...devices['iPhone XR landscape'] } },
  { name: 'iPhone 11', use: { ...devices['iPhone 11'] } },
  { name: 'iPhone 11 landscape', use: { ...devices['iPhone 11 landscape'] } },
  { name: 'iPhone 11 Pro', use: { ...devices['iPhone 11 Pro'] } },
  { name: 'iPhone 11 Pro landscape', use: { ...devices['iPhone 11 Pro landscape'] } },
  { name: 'iPhone 11 Pro Max', use: { ...devices['iPhone 11 Pro Max'] } },
  { name: 'iPhone 11 Pro Max landscape', use: { ...devices['iPhone 11 Pro Max landscape'] } },
  { name: 'iPhone 12', use: { ...devices['iPhone 12'] } },
  { name: 'iPhone 12 landscape', use: { ...devices['iPhone 12 landscape'] } },
  { name: 'iPhone 12 Pro', use: { ...devices['iPhone 12 Pro'] } },
  { name: 'iPhone 12 Pro landscape', use: { ...devices['iPhone 12 Pro landscape'] } },
  { name: 'iPhone 12 Pro Max', use: { ...devices['iPhone 12 Pro Max'] } },
  { name: 'iPhone 12 Pro Max landscape', use: { ...devices['iPhone 12 Pro Max landscape'] } },
  { name: 'iPhone 12 Mini', use: { ...devices['iPhone 12 Mini'] } },
  { name: 'iPhone 12 Mini landscape', use: { ...devices['iPhone 12 Mini landscape'] } },
  { name: 'iPhone 13', use: { ...devices['iPhone 13'] } },
  { name: 'iPhone 13 landscape', use: { ...devices['iPhone 13 landscape'] } },
  { name: 'iPhone 13 Pro', use: { ...devices['iPhone 13 Pro'] } },
  { name: 'iPhone 13 Pro landscape', use: { ...devices['iPhone 13 Pro landscape'] } },
  { name: 'iPhone 13 Pro Max', use: { ...devices['iPhone 13 Pro Max'] } },
  { name: 'iPhone 13 Pro Max landscape', use: { ...devices['iPhone 13 Pro Max landscape'] } },
  { name: 'iPhone 13 Mini', use: { ...devices['iPhone 13 Mini'] } },
  { name: 'iPhone 13 Mini landscape', use: { ...devices['iPhone 13 Mini landscape'] } },
  { name: 'iPhone 14', use: { ...devices['iPhone 14'] } },
  { name: 'iPhone 14 landscape', use: { ...devices['iPhone 14 landscape'] } },
  { name: 'iPhone 14 Plus', use: { ...devices['iPhone 14 Plus'] } },
  { name: 'iPhone 14 Plus landscape', use: { ...devices['iPhone 14 Plus landscape'] } },
  { name: 'iPhone 14 Pro', use: { ...devices['iPhone 14 Pro'] } },
  { name: 'iPhone 14 Pro landscape', use: { ...devices['iPhone 14 Pro landscape'] } },
  { name: 'iPhone 14 Pro Max', use: { ...devices['iPhone 14 Pro Max'] } },
  { name: 'iPhone 14 Pro Max landscape', use: { ...devices['iPhone 14 Pro Max landscape'] } },
  { name: 'Kindle Fire HDX', use: { ...devices['Kindle Fire HDX'] } },
  { name: 'Kindle Fire HDX landscape', use: { ...devices['Kindle Fire HDX landscape'] } },
  { name: 'LG Optimus L70', use: { ...devices['LG Optimus L70'] } },
  { name: 'LG Optimus L70 landscape', use: { ...devices['LG Optimus L70 landscape'] } },
  { name: 'Microsoft Lumia 550', use: { ...devices['Microsoft Lumia 550'] } },
  { name: 'Microsoft Lumia 550 landscape', use: { ...devices['Microsoft Lumia 550 landscape'] } },
  { name: 'Microsoft Lumia 950', use: { ...devices['Microsoft Lumia 950'] } },
  { name: 'Microsoft Lumia 950 landscape', use: { ...devices['Microsoft Lumia 950 landscape'] } },
  { name: 'Nexus 10', use: { ...devices['Nexus 10'] } },
  { name: 'Nexus 10 landscape', use: { ...devices['Nexus 10 landscape'] } },
  { name: 'Nexus 4', use: { ...devices['Nexus 4'] } },
  { name: 'Nexus 4 landscape', use: { ...devices['Nexus 4 landscape'] } },
  { name: 'Nexus 5', use: { ...devices['Nexus 5'] } },
  { name: 'Nexus 5 landscape', use: { ...devices['Nexus 5 landscape'] } },
  { name: 'Nexus 5X', use: { ...devices['Nexus 5X'] } },
  { name: 'Nexus 5X landscape', use: { ...devices['Nexus 5X landscape'] } },
  { name: 'Nexus 6', use: { ...devices['Nexus 6'] } },
  { name: 'Nexus 6 landscape', use: { ...devices['Nexus 6 landscape'] } },
  { name: 'Nexus 6P', use: { ...devices['Nexus 6P'] } },
  { name: 'Nexus 6P landscape', use: { ...devices['Nexus 6P landscape'] } },
  { name: 'Nexus 7', use: { ...devices['Nexus 7'] } },
  { name: 'Nexus 7 landscape', use: { ...devices['Nexus 7 landscape'] } },
  { name: 'Nokia Lumia 520', use: { ...devices['Nokia Lumia 520'] } },
  { name: 'Nokia Lumia 520 landscape', use: { ...devices['Nokia Lumia 520 landscape'] } },
  { name: 'Nokia N9', use: { ...devices['Nokia N9'] } },
  { name: 'Nokia N9 landscape', use: { ...devices['Nokia N9 landscape'] } },
  { name: 'Pixel 2', use: { ...devices['Pixel 2'] } },
  { name: 'Pixel 2 landscape', use: { ...devices['Pixel 2 landscape'] } },
  { name: 'Pixel 2 XL', use: { ...devices['Pixel 2 XL'] } },
  { name: 'Pixel 2 XL landscape', use: { ...devices['Pixel 2 XL landscape'] } },
  { name: 'Pixel 3', use: { ...devices['Pixel 3'] } },
  { name: 'Pixel 3 landscape', use: { ...devices['Pixel 3 landscape'] } },
  { name: 'Pixel 4', use: { ...devices['Pixel 4'] } },
  { name: 'Pixel 4 landscape', use: { ...devices['Pixel 4 landscape'] } },
  { name: 'Pixel 4a (5G)', use: { ...devices['Pixel 4a (5G)'] } },
  { name: 'Pixel 4a (5G) landscape', use: { ...devices['Pixel 4a (5G) landscape'] } },
  { name: 'Pixel 5', use: { ...devices['Pixel 5'] } },
  { name: 'Pixel 5 landscape', use: { ...devices['Pixel 5 landscape'] } },
  { name: 'Pixel 7', use: { ...devices['Pixel 7'] } },
  { name: 'Pixel 7 landscape', use: { ...devices['Pixel 7 landscape'] } },
  { name: 'Moto G4', use: { ...devices['Moto G4'] } },
  { name: 'Moto G4 landscape', use: { ...devices['Moto G4 landscape'] } },
  { name: 'Desktop Chrome HiDPI', use: { ...devices['Desktop Chrome HiDPI'] } },
  { name: 'Desktop Edge HiDPI', use: { ...devices['Desktop Edge HiDPI'] } },
  { name: 'Desktop Firefox HiDPI', use: { ...devices['Desktop Firefox HiDPI'] } },
  { name: '', use: { ...devices[''] } },
];

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000000,
  expect:{
    timeout: 600000,
  },

  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,  

  use: {
    trace: 'on-first-retry',
    screenshot: 'on',
    video: 
    { mode:'on',
      size:{width:1536,height:738}
    } ,
    headless:false,
    viewport: null, 
  },

  reporter: 
          [
            ['line'],
            ['html'],
            ['list'],
          ],

  projects: [
    {
      name: 'chromium',
      
      use: {  
        ...devices['Desktop Chromium'],
        viewport: null,
    
        launchOptions: {
          args: ["--start-maximized"]
      } 
      }, 
      permissions: ["microphone","camera"] 
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     // viewport: { width: 1820, height: 1080},
    //     deviceScaleFactor: 2 ,
    //     launchOptions: {
    //       args: ["--kiosk"]
    //   }
    //   },
    // },
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // // /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     channel: 'msedge',
    //     launchOptions:{
    //       args:['--start-maximized']
    //     }
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     channel: 'chrome',
    //     launchOptions:{
    //       args: ['--start-maximized']
    //     }
    //   },
    // },
  ]
  // ].concat(moreProjects),
});
