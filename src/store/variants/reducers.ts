import {
    VariantsState,
    VariantsActionTypes,
    SET_SELECTED_VARIANT_QUANTITY,
    SET_SELECTED_VARIANT_AND_VARIANT_IMAGE,
} from "./types";

const initialState: VariantsState = {
    selectedVariantQuantity: null,
    selectedVariant: null,
    selectedVariantImage: null,
};

export function variantsReducer(
    state = initialState,
    action: VariantsActionTypes
): VariantsState {
    switch (action.type) {
        case SET_SELECTED_VARIANT_QUANTITY:
            return {
                ...state,
                selectedVariantQuantity: action.payload.selectedVariantQuantity,
            };
        case SET_SELECTED_VARIANT_AND_VARIANT_IMAGE:
            return {
                ...state,
                selectedVariant: action.payload.selectedVariant,
                selectedVariantImage: action.payload.selectedVariantImage,
            };
        default:
            return state;
    }
}
