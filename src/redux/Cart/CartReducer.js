import { CartActionTypes } from './CartActionTypes'
import { addItemToCart, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } from './CartUtilityFunctions'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                // cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.INCREASE_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: increaseItemQuantity(state.cartItems, action.payload)
            }
        case CartActionTypes.DECREASE_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: decreaseItemQuantity(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer