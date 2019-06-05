exports.config = {
  specs: [
    './src/test/features/**/*.feature'
  ],
  exclude: [],
  runner: 'local',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  services: ['selenium-standalone'],
  seleniumLogs: './selenium-server-logs/',
  seleniumInstallArgs: {
    baseURL: 'https://selenium-release.storage.googleapis.com',
    version: '3.141.5',
    drivers: {
      chrome: {
        version: '75.0.3770.8',
        arch: process.arch,
        baseURL: 'https://chromedriver.storage.googleapis.com'
      },
      ie: {
        version: '3.14.0',
        arch: process.arch,
        baseURL: 'https://selenium-release.storage.googleapis.com'
      },
      firefox: {
        version: '0.24.0',
        arch: process.arch,
        baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
      },
      edge: {
        version: '17134'
      }
    }
  },
  seleniumArgs: {
    version: '3.141.5',
    drivers: {
      chrome: {
        version: '75.0.3770.8',
        arch: process.arch
      },
      ie: {
        version: '3.14.0',
        arch: process.arch
      },
      firefox: {
        version: '0.24.0',
        arch: process.arch
      },
      edge: {
        version: '17134'
      }
    }
  },
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'firefox'
    },
    {
      maxInstances: 5,
      browserName: 'chrome'
    }
  ],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  screenshotPath: './errorShots/',
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: [
      './src/test/steps/housingPageSteps.js'
    ],
    backtrace: false,   // <boolean> show full backtrace for errors
    compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    dryRun: false,      // <boolean> invoke formatters without executing steps
    failFast: false,    // <boolean> abort the run on first failure
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true,       // <boolean> disable colors in formatter output
    snippets: true,     // <boolean> hide step definition snippets for pending steps
    source: true,       // <boolean> hide source uris
    profile: [],        // <string[]> (name) specify the profile to use
    strict: false,      // <boolean> fail if there are any undefined or pending steps
    tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 20000,     // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
  }
}
