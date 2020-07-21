import { store } from "..";
import { LineItem } from "shopify-buy";

export function addVariantToCart(variantId: string | number, quantity: number) {
    const { shopify } = store.getState();
    const { cart, client } = shopify;
    const lineItemsToAdd = [{ variantId, quantity }];
    if (cart && client) {
        const checkoutId = cart.id;
        client.checkout.addLineItems(checkoutId, lineItemsToAdd);
    }
}

export function decrementQuantity(lineItem: LineItem) {
    const updatedQuantity = lineItem.quantity - 1;
    updateQuantityInCart(lineItem.id, updatedQuantity);
}

export function incrementQuantity(lineItem: LineItem) {
    const updatedQuantity = lineItem.quantity + 1;
    updateQuantityInCart(lineItem.id, updatedQuantity);
}

export function removeLineItemFromCart(lineItemId: string | number) {
    const { shopify } = store.getState();
    const { cart, client } = shopify;
    if (client && cart) {
        const checkoutId = cart.id;
        client.checkout.removeLineItems(checkoutId, [lineItemId.toString()]);
    }
}

function updateQuantityInCart(id: string | number, quantity: number) {
    const { shopify } = store.getState();
    const { cart, client } = shopify;
    if (client && cart) {
        const checkoutId = cart.id;
        client.checkout.updateLineItem(checkoutId, [{ id, quantity }]);
    }
}
