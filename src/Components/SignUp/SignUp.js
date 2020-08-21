import React, { useState } from 'react';
import { connect } from 'react-redux'

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton'

// import {auth, createUserProfileDocument } from '../../Firebase/firebase.utils'

import './SignUp.scss'
import { signUpStart } from '../../redux/User/UserActions';


const SignUp = ({ signUpStart }) => {
    // constructor() {
    //     super();

    //     this.state = {
    //         displayName: '',
    //         email: '',
    //         password: '',
    //         confirmPassword: ''
    //     }
    // }
    const [ signUpDetails, setSignUpDetails ] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })

    const { displayName, email, password, confirmPassword } = signUpDetails

    const handleSubmit = async event => {
        event.preventDefault();       

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }
    
        signUpStart({displayName, email, password})

        // this.setState({
        //     displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        // })
    }

    const handelChange = event => {
        const { name, value } = event.target;
        setSignUpDetails({...signUpDetails, [name] : value })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={handelChange}
                label='Display Name'
                required
            />
            <FormInput
                type='text'
                name='email'
                value={email}
                onChange={handelChange}
                label='Email Address'
                required
            />
            <FormInput
                type='password'
                name='password'
                value={password}
                onChange={handelChange}
                label='Password'
                required
            />
            <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handelChange}
                label='Confirm Password'
                required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signUpStart: ( signUpDetails ) => dispatch(signUpStart(signUpDetails))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)