import { CartActionTypes } from "./CartActionTypes";
export const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
}