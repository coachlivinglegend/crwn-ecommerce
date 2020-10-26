import React from 'react';
// import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../CustomButton/CustomButton';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HFgyqAJTEZ7zpCBUvPX7wiJQbFZnMBBp0ciY0mzrKbhOCuhill9l1tce5FH9Uga9etV7DKYX1uciVLAqHFndnxd00AOvrYwDP'

    const onToken = token => {
        fetch('https://crwn-cloth-elive.herokuapp.com/payment', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                amount: priceForStripe,
                token
            })
        }).then(response => {
            alert('Payment Successful')
        }).catch(error => {
            alert("There was an issue with your payment. 419.")
        })

        // axios({
        //     url: 'payment',
        //     method: 'post',
        //     data: {
        //         amount: priceForStripe,
        //         token
        //     }
        // }).then(response => {
        //     alert('Payment Successful')
        //     console.log(response)
        // }).catch(error => {
        //     console.log('Payment error:', JSON.parse(error));
        //     alert("There was an issue with your payment. 419.")
        // })
    }

    return (
        <StripeCheckout
            label='Pay Me My Money'
            name='CRWN Clothing WebDv'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now Now'
            token={onToken}
            stripeKey={publishableKey}
        >
            <CustomButton stripe >PAY WITH STRIPE</CustomButton>
        </StripeCheckout>
    )
}

export default StripeCheckoutButton