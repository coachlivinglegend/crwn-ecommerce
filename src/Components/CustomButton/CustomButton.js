import React from 'react';

import './CustomButton.scss';

const CustomButton = ({children, stripe, isGoogleSignIn, inverted, ...otherProps}) => {
    return (
        <button className={`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'google-sign-in' : '' } ${stripe ? 'stripe' : '' } custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;