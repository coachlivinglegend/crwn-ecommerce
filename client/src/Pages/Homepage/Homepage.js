import React from 'react';
import { HomepageContainer } from './Homepage.style'
import './Homepage.scss';
import Directory from '../../Components/Directory/Directory';

const Homepage = () => (
    <HomepageContainer>
        <Directory/>
    </HomepageContainer>
)

export default Homepage