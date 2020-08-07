import React from "react";
import {connect} from 'react-redux'

import CustomButton from '../CustomButton/CustomButton';

import CartItem from '../CartItem/CartItem';

import './CartDropdown.scss';

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => {
                        return (
                            <CartItem key={cartItem.id} item={cartItem}/>
                        )
                    })
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(CartDropdown)