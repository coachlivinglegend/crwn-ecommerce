import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/Cart/CartSelectors'

import './MainCheckout.scss';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem'
import StripeCheckoutButton from '../../Components/StripeButton/StripeButton'
import CustomButton from '../../Components/CustomButton/CustomButton'

const MainCheckout = ({cartItems, total, history, match}) => {
    return (
        <div>
            <div className='checkout-page'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                {
                    cartItems.map(cartItem => {
                        return (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                        )
                    })
                }
                <div className='total'>
                    <span>TOTAL: ${total}</span>
                </div>
                    <div className='test-warning'>
                        *Please use the following test credit card for payments*
                        <br/>
                        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
                    </div>
                    <div style={{display: "flex", flexDirection: "column" }}>
                        <StripeCheckoutButton price={total} />
                        <CustomButton style={{marginTop: 20}} onClick={() => {history.push(`${match.path}/paystack`)}}>PAY WITH PAYSTACK</CustomButton>
                    </div>

            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps, null)(MainCheckout)