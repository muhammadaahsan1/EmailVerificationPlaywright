import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';

test('should add products to cart', async({page})=>{

    //Login
    const login = new LoginPage(page);
    await login.gotoWebsite();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(7000);




    //HomePage
    const homepage = new HomePage(page);
    await homepage.addProductsToCart('Nexus 6');
    await homepage.gotoCartPage();
    await page.waitForTimeout(7000);



    //Cart





})