import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { auth } from '../../Firebase/firebase.utils'
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/4.4 crown.svg.svg'
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from '../CartDropdown/CartDropdown'
import { selectCartHidden } from '../../redux/Cart/CartSelectors'
import { selectCurrentUser } from '../../redux/User/UserSelectors'

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

// const mapStateToProps = (state) => {
//     return {
//         currentUser: state.user.currentUser,
//         hidden: state.cart.hidden
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         currentUser: selectCurrentUser(state),
//         hidden: selectCartHidden(state)
//     }
// }

const mapStateToProps = createStructuredSelector ({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
})




export default connect(mapStateToProps)(Header)