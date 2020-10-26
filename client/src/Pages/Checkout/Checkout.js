import React from 'react';
import { Route } from 'react-router-dom'
import MainCheckout from '../../Components/MainCheckout/MainCheckout'
import Paystack from '../Paystack/Paystack'

const CheckoutPage = ({ match }) => {
    console.log(match)
    return (
        <div>
            <Route exact path={`${match.path}`} component= {MainCheckout} />
            <Route path={`${match.path}/paystack`} component={Paystack}/>
        </div>
    )
}


export default CheckoutPage