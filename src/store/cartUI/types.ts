export const SET_CART_OPEN = "SET_CART_OPEN";

export interface CartUIState {
    isCartOpen: boolean;
}

export interface SetCartOpenAction {
    type: typeof SET_CART_OPEN;
    payload: {
        isCartOpen: boolean;
    };
}

export type CartUIActionTypes = SetCartOpenAction;
