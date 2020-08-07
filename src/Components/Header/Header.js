import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { auth } from '../../Firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/4.4 crown.svg.svg'
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from '../CartDropdown/CartDropdown'

const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser 
                    ?
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                }
                <CartIcon/>
            </div>
            {hidden ? null : <CartDropdown/>}
        </div>
    )
}

const mapSateToProps = state => {
    return {
        currentUser: state.user.currentUser,
        hidden: state.cart.hidden
    }
}

export default connect(mapSateToProps, null)(Header)