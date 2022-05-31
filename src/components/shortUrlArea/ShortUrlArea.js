import React from 'react';
import './shortUrlArea.css'
import { StyledButton } from '../styledComponents/styledComponents'

const ShortUrlArea = () => {
    return (
       
            <div className='shortUrlArea'>

            <input type='text' placeholder='Shorten a link here...' />
<StyledButton>Shorten It!</StyledButton>
        </div>
    );
};

export default ShortUrlArea;