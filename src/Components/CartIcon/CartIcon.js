import React from 'react';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/Cart/CartActions'

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';

import './CartIcon.scss';

const CartIcon = ({toggleCartHidden, cartItems}) => {
    console.log(cartItems)
    return (
        <div onClick={toggleCartHidden} className='cart-icon'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartItems.length}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}


const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)