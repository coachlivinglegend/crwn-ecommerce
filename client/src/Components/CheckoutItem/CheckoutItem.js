import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, increaseItemQuantity, decreaseItemQuantity } from '../../redux/Cart/CartActions'
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, clearItem, increaseItemQuantity, decreaseItemQuantity }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseItemQuantity(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div className='arrow' onClick={() => increaseItemQuantity(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        clearItem: item => dispatch(clearItemFromCart(item)),
        increaseItemQuantity: item => dispatch(increaseItemQuantity(item)),
        decreaseItemQuantity: item => dispatch(decreaseItemQuantity(item))
    }
}
export default connect(null, mapDispatchToProps)(CheckoutItem)