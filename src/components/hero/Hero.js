import React from 'react';
import './hero.css'
import WorkingImage from '../../images/illustration-working.svg'
import { StyledButton } from '../styledComponents/styledComponents';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='heroLeft'>
<h1>More than just <br />shorter links</h1>

Build your brand’s recognition and get detailed 
<br />insights 
on how your links are performing.

<StyledButton size={'large'}>Get Started</StyledButton>
</div>
<div className='heroRight'>
    <img src={WorkingImage} alt='person working' />
</div>
        </div>
    );
};

export default Hero;