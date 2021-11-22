import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputSearchProduct(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#search_query_top');
    }

    get submitSearch(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('button[name="submit_search"]');
    }

    get selectProduct(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('img[alt="Printed Chiffon Dress"]');
    }

    get increaseQuantity(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('i[class="icon-plus"]');
    }

    get selectSize(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $(' div[class="selector"]');
    }

    get addToCart(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#add_to_cart');
    }

    //a method to search a Product
    async searchProduct(product){
        await this.inputSearchProduct.setValue(product);
        await this.submitSearch.click();
    }

     //a method to select a Product
    async selectProducts(){
        await this.selectProduct.click();
    }

    //a method to add to cart a Product
    async addProductToCart(){
        await this.increaseQuantity.click();
        await this.selectSize.click();
        await this.addToCart.click();
        $('i[class="icon-ok"]').isDisplayed();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open(): Promise<string> {
        return super.open('login');
    }
}

export default new LoginPage();
