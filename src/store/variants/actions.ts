import { store } from "..";
import {
    SET_SELECTED_VARIANT_QUANTITY,
    SET_SELECTED_VARIANT_AND_VARIANT_IMAGE,
} from "./types";

export function handleQuantityChange(
    event: React.ChangeEvent<HTMLInputElement>
) {
    store.dispatch({
        type: SET_SELECTED_VARIANT_QUANTITY,
        payload: {
            selectedVariantQuantity: parseFloat(event.target.value),
        },
    });
}

export function handleOptionChange(
    event: React.ChangeEvent<HTMLSelectElement>,
    product: ShopifyBuy.Product
) {
    const { shopify } = store.getState();
    const { client } = shopify;
    let selectedOptions: any;
    product.options.forEach((selector) => {
        selectedOptions[selector.name] = selector.values[0].value;
    });

    const target = event.target;
    selectedOptions[target.name] = target.value;

    if (client) {
        const selectedVariant = client.product.variantForOptions(
            product,
            selectedOptions
        );

        store.dispatch({
            type: SET_SELECTED_VARIANT_AND_VARIANT_IMAGE,
            payload: {
                selectedVariant,
                selectedVariantImage: selectedVariant.attrs.image,
            },
        });
    }
}
