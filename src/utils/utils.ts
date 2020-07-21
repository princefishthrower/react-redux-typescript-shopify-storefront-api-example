import { store } from "../store";
import Client from "shopify-buy";
import {
    CLIENT_CREATED,
    PRODUCTS_FETCHED,
    CHECKOUT_CREATED,
    SHOP_INFO_FETCHED,
} from "../store/shopify/types";

export async function bootstrapShopify(): Promise<void> {
    try {
        // client
        const client = Client.buildClient({
            storefrontAccessToken: "YOUR_SHOPIFY_STOREFRONT_ACCESS_TOKEN",
            domain: "YOUR_MYSHOPIFY_STORE_URL",
        });
        store.dispatch({ type: CLIENT_CREATED, payload: { client } });

        // products
        const products = await client.product.fetchAll();
        store.dispatch({
            type: PRODUCTS_FETCHED,
            payload: {
                products,
            },
        });

        // cart
        const cart = await client.checkout.create();
        store.dispatch({ type: CHECKOUT_CREATED, payload: { cart } });

        // shop
        const shop = await client.shop.fetchInfo();
        store.dispatch({ type: SHOP_INFO_FETCHED, payload: { shop } });

        // catch any errors thrown in bootstrapping process
    } catch (error) {
        // TODO: real error handling here, perhaps to real logs or do something else entirely
        console.log(error);
    }
}
