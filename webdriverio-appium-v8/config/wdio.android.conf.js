const path = require('path');
const { config } = require('./wdio.shared.conf');

// Runner Configuration
config.port = 4723;

config.path = '/wd/hub';

// Specs
config.specs = [
    // ToDo: define location for spec files here
    // './test/specs/ios*.js'
    // '../test/specs/android/*.js'
    '../test/specs/android/api-demo.spec.js'
];

// Capabilities
config.capabilities = [
    {
        // platformName: 'Android',
        // 'appium:platformVersion': '11.0',
        // 'appium:deviceName': 'Pixel 3',
        // 'appium:automationName': 'UIAutomator2',
        // 'appium:app': path.join(process.cwd(), './app/android/ColorNote+Notepad.apk'),
        // "appium:autoGrantPermissions": true,
        // platformName: 'Android',
        // 'appium:platformVersion': '11.0',
        // 'appium:deviceName': 'Pixel 3',
        // 'appium:automationName': 'UIAutomator2',
        // 'appium:app': path.join(process.cwd(), './app/android/android-calculator2.apk'), 
        // "appium:autoGrantPermissions": true,
        platformName: 'Android',
        'appium:platformVersion': '11.0',
        'appium:deviceName': 'Pixel 3',
        'appium:automationName': 'UIAutomator2',
        'appium:app': path.join(process.cwd(), './app/android/ApiDemos-debug.apk'), 
        "appium:autoGrantPermissions": true,
    }
];

exports.config = config;