import React from 'react';
import './Header.scss';
import { connect } from 'react-redux'
// import { auth } from '../../Firebase/firebase.utils'
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/4.4 crown.svg.svg'
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from '../CartDropdown/CartDropdown'
import { selectCartHidden } from '../../redux/Cart/CartSelectors'
import { selectCurrentUser } from '../../redux/User/UserSelectors'
import { signOutStart } from "../../redux/User/UserActions";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './Header.style'

const Header = ({currentUser, hidden, signOutStart}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser 
                    ?
                    <OptionDiv onClick={signOutStart}>
                    {/* <OptionDiv as='h1' onClick={() => auth.signOut()}> */}
                        SIGN OUT
                    </OptionDiv>
                    :
                    <OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {hidden ? null : <CartDropdown/>}
        </HeaderContainer>
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

const mapDispatchToProps = dispatch => {
    return {
        signOutStart: () => dispatch(signOutStart())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)