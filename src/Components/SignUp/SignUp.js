import React from 'react';
import { connect } from 'react-redux'

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton'

// import {auth, createUserProfileDocument } from '../../Firebase/firebase.utils'

import './SignUp.scss'
import { signUpStart } from '../../redux/User/UserActions';


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();       
        const { signUpStart } = this.props
        const { displayName, email, password, confirmPassword } = this.state;

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

    handelChange = event => {
        const { name, value } = event.target;
        this.setState({ [name] : value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handelChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='text'
                    name='email'
                    value={email}
                    onChange={this.handelChange}
                    label='Email Address'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handelChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handelChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpStart: ( signUpDetails ) => dispatch(signUpStart(signUpDetails))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)