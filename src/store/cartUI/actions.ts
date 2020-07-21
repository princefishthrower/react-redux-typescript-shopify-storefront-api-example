import { SET_CART_OPEN } from "./types";
import { store } from "..";

export function setCartOpen(isCartOpen: boolean): void {
    store.dispatch({
        type: SET_CART_OPEN,
        payload: {
            isCartOpen,
        },
    });
}
