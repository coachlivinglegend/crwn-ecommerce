import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput'
// import { auth, signInWithGoogle } from '../../Firebase/firebase.utils'
import {googleSignInStart, emailSignInStart} from '../../redux/User/UserActions';

import './SignIn.scss'
import CustomButton from '../CustomButton/CustomButton';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         email: '',
    //         password: ''
    //     }
    // }

    const [ signInDetails, setSignInDetails ] = useState({ email: '', password: '' })

    const { email, password } = signInDetails
    const handleSubmit = async event => {
        event.preventDefault();

        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({ email: '', password: ''})
        // } catch(error) {
        //     console.log(error)
        // }
        emailSignInStart(email, password)
        // this.setState({ email: '', password: ''})
    }

    const handleChange = event => {
        const { value, name } = event.target;
        // setSignInDetails({ [name]: value})
        setSignInDetails({...signInDetails, [name]: value})
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password.</span>

            <form onSubmit = {handleSubmit}>
                <FormInput handleChange={handleChange} label='email' name='email'type='email' value={email} required />
                <FormInput handleChange={handleChange} label='password' name='password'type='password' value={password} required />
                <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type='button' onClick = {googleSignInStart} isGoogleSignIn> Sign in with Google </CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
    }
}
export default connect(null, mapDispatchToProps)(SignIn)