import React from 'react';
import './SignInAndUp.scss'
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

const SignInAndUp = () => {
    return <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
}

export default SignInAndUp