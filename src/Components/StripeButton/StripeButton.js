import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../CustomButton/CustomButton';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HFgyqAJTEZ7zpCBUvPX7wiJQbFZnMBBp0ciY0mzrKbhOCuhill9l1tce5FH9Uga9etV7DKYX1uciVLAqHFndnxd00AOvrYwDP'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
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
            <CustomButton stripe >PAY NOW</CustomButton>
        </StripeCheckout>
    )
}

export default StripeCheckoutButton