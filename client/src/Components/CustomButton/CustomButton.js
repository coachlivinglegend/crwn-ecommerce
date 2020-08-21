import React from 'react';
import { CustomButtonContainer } from './CustomButtonStyle'

import './CustomButton.scss';

const CustomButton = ({ children, ...props }) => {
    return (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton;