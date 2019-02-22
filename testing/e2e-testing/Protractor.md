# Protractor
- is an end-to-end test framework for Angular and AngularJS applications. Protractor is a Node.js program built on top of WebDriverJS. Protractor runs tests against your application running in a real browser, interacting with it as a user would.
https://github.com/angular/protractor


## Gloassary

**Functional Tests** Testing how scenarios function on the product itself, by controlling the browser or the website. This tests usually ignore the internal structure of the application entirety and looks at them from the outside like on a black box.

**Test launchers** are given a list of tests, and the various configuration and scaffolding necessary to run those tests (what browsers to run in, what babel plugins to use, how to format output, etc).

**Spies** provide us with information about functions. For example, how many times were they called, in which cases, and by whom?

**Page Object** is a Design Pattern which has become popular in test automation for enhancing test maintenance and reducing code duplication. A page object is an object-oriented class that serves as an interface to a page of your AUT

## List of General Prominent Testing Tools
https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a
jsdom - simulates a browser environment
Istanbul - Code Coverage
Karma
Sinon- use for test spies, stubs and mocks

# Page Objects
If you create a project using the angular cli and look at the e2e folder you will notice there are two files We have the spec file that protractor uses to run the tests. Then we have the ```.po.ts``` file. This is our page objects file.

In our project the e2e folder structure is a little different. Make them to match your app folder which is actually good practice. This arranges our tests in an orderly fashion.

## Sample Tests
- using async and await for asynchronous tests
```js
it('when login is unsuccessful, should stay in login page', async () => {
    loginPage.navigateTo();
    const badCredentials = {
        email: 'user@domain.com',
        password: 'wrong-password'
    };
    await loginPage.loginWithCredentials(badCredentials);
    expect(browser.driver.getCurrentUrl()).toEqual(browser.baseUrl + '/login');
});
```