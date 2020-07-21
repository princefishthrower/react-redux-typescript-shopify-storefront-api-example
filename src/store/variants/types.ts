export const SET_SELECTED_VARIANT_QUANTITY = "SET_SELECTED_VARIANT_QUANTITY";
export const SET_SELECTED_VARIANT_AND_VARIANT_IMAGE =
    "SET_SELECTED_VARIANT_AND_VARIANT_IMAGE";

export interface VariantsState {
    selectedVariantQuantity: number | null;
    selectedVariant: ShopifyBuy.ProductVariant | null;
    selectedVariantImage: any | null;
}

export interface SetSelectedVariantQuantityAction {
    type: typeof SET_SELECTED_VARIANT_QUANTITY;
    payload: {
        selectedVariantQuantity: number;
    };
}

export interface SetSelectedVariantAndVariantImageAction {
    type: typeof SET_SELECTED_VARIANT_AND_VARIANT_IMAGE;
    payload: {
        selectedVariant: ShopifyBuy.ProductVariant;
        selectedVariantImage: any;
    };
}

export type VariantsActionTypes =
    | SetSelectedVariantQuantityAction
    | SetSelectedVariantAndVariantImageAction;
