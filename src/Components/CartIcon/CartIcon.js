import React from 'react';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/Cart/CartActions'

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';

import './CartIcon.scss';

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div onClick={toggleCartHidden} className='cart-icon'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon)