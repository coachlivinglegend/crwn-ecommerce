export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToAdd.id
    });

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            return (
                cartItem.id === cartItemToAdd.id
                ? {...cartItem,
                    quantity: cartItem.quantity + 1}
                : cartItem
            )
        })
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => {
        return cartItem.id !== cartItemToRemove.id
    })
}

export const increaseItemQuantity = (cartItems, cartItemQuantityToIncrease) => {
    return cartItems.map(cartItem => {
        return ( 
            cartItem.id === cartItemQuantityToIncrease.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    })
}

export const decreaseItemQuantity = (cartItems, cartItemQuantityToDecrease) => {
    if (cartItemQuantityToDecrease.quantity === 1) {
        return cartItems.filter(cartItem => {
            return cartItem.id !== cartItemQuantityToDecrease.id
        })    
    }

    return cartItems.map(cartItem => {
        return ( 
            (cartItem.id === cartItemQuantityToDecrease.id)
            ? 
                {...cartItem,
                quantity: cartItem.quantity - 1}
            : cartItem
        )
    })
}


