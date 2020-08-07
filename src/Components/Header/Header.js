import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { auth } from '../../Firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/4.4 crown.svg.svg'

const Header = ({currentUser}) => {
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
            </div>
        </div>
    )
}

const mapSateToProps = state => {
    return {currentUser: state.user.currentUser}
}

export default connect(mapSateToProps, null)(Header)