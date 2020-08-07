import React from 'react';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/Cart/CartActions'

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';

import './CartIcon.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    // const itemCount = cartItems.reduce((acc, arr) => acc + arr.quantity, 0)

    return (
        <div onClick={toggleCartHidden} className='cart-icon'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
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
        itemCount: state.cart.cartItems.reduce((acc, arr) => acc + arr.quantity, 0)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)