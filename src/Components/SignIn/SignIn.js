import React from 'react';
import FormInput from '../FormInput/FormInput'
import { auth, signInWithGoogle } from '../../Firebase/firebase.utils'

import './SignIn.scss'
import CustomButton from '../CustomButton/CustomButton';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''})
        } catch(error) {
            console.log(error)
        }

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value})
    }

    render () {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit = {this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label='email' name='email'type='email' value={this.state.email} required />
                    <FormInput handleChange={this.handleChange} label='password' name='password'type='password' value={this.state.password} required />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn