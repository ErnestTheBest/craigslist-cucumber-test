# craigslist.org test suite
A demo test suite for craigslist.org using cucumber and webdriverIO

## Disclamer
This setup requires **node 10.0.0+** to run

## How to run
1. Setup
    * Chromedriver
        * Check Chrome version that's installed on your computer.
        * Refer to [chromedriver version list](http://chromedriver.chromium.org/downloads) to pick correct 
        version for you.
        * Adjust package.json _**chromedriver**_ dependency with correct version from 
        [this list](https://www.npmjs.com/package/chromedriver) of versions.
    * Selenium server
        * Requires JVM to run
        * Check browsers version that's installed on your computer.
        * Pick correct versions of chromedriver, geckodriver, ie, edge drivers that you want to use.
        * Adjust _./wdio.selenium.standalone.conf.js_ with correct driver versions.
        * Both _seleniumInstallArgs_ and _seleniumArgs_ should be adjusted with proper driver versions.
1. Running
    * To run tests with chrome use `npm run test:chrome`
    * To run parallel firefox and chrome `npm run test:server`
    
## Useful links
* Cucumber test runner [documentation](https://webdriver.io/docs/frameworks.html#using-cucumber) and [example](https://github.com/webdriverio/cucumber-boilerplate).
* WebdriverIO v4 test runner [configuration documentation](http://v4.webdriver.io/guide/testrunner/configurationfile.html).
* WebdriverIO API [documentation](http://v4.webdriver.io/api.html).