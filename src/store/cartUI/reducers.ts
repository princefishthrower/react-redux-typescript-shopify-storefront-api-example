import { CartUIActionTypes, CartUIState, SET_CART_OPEN } from "./types";

const initialState: CartUIState = {
    isCartOpen: false,
};

export function cartUIReducer(
    state = initialState,
    action: CartUIActionTypes
): CartUIState {
    switch (action.type) {
        case SET_CART_OPEN:
            return { ...state, isCartOpen: action.payload.isCartOpen };
        default:
            return state;
    }
}
