import { CartActionTypes } from "./CartActionTypes";
export const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
}

export const addItem = (item) => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
}

export const clearItemFromCart = (item) => {
    return {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    }
}

export const increaseItemQuantity = (item) => {
    return {
        type: CartActionTypes.INCREASE_ITEM_QUANTITY,
        payload: item
    }
}

export const decreaseItemQuantity = (item) => {
    return {
        type: CartActionTypes.DECREASE_ITEM_QUANTITY,
        payload: item
    }
}