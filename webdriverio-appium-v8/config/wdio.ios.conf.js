const path = require('path');
const { config } = require('./wdio.shared.conf');

// Runner Configuration
config.port = 4723;

config.path = '/wd/hub';
// Specs
config.specs = [
    // ToDo: define location for spec files here
    '../test/specs/ios/ios-todo-list*.js'
    // '../test/specs/ios/*.js'
];

// Capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        'appium:platformVersion': '15.0',
        'appium:deviceName': 'iPhone 11',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), './app/ios/MVCTodo.app')
    }
]

exports.config = config;