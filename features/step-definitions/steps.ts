import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    expect(browser).toHaveTitle('My Store');
});

When(/^I search for a (.+)$/, async (product) => {
    await LoginPage.searchProduct(product);
    await LoginPage.selectProducts();
    await LoginPage.addProductToCart();
  });
