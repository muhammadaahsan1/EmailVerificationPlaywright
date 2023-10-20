exports.HomePage= class HomePage{

    constructor(page){

        this.page=page;
        this.productList= '//*[@id="tbodyid"]//div/h4[@class="card-title"]/a';
        this.addToCartButton ='//a[normalize-space()="Add to cart"]';
        this.cart = '#cartur';

    }


    async addProductsToCart(productName){

        const productList = await this.page.$$(this.productList);
        console.log(productList.textContent)
        for (const product of productList){
            if(productName===await product.textContent()){
                await product.click();
                
                break;
            }
        }
        await this.page.locator(this.addToCartButton).click();
        await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }

        })

        

        





    }

    async gotoCartPage(){
        await this.page.locator(this.cart).click;
    }




}