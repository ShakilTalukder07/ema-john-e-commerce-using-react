import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCardLoaders = async () => {
    // get products 
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart 
    const savedCart = getStoredCart()
    // console.log('savedCart', savedCart)

    for (const id in savedCart) {
        console.log(id)
    }
    
    return products;
}
