import React from 'react';
import './urlResults.css'
import { StyledButton } from '../styledComponents/styledComponents';

const UrlResults = (props) => {
    return (
        <div className='urlResult'>
            <p>{props.enteredUrl}</p>
            <div className='copyLink'>
            <span className='shortUrlResult'>{props.shortUrl}</span>
            <StyledButton>Copy</StyledButton>
            </div>
        </div>
    );
};

export default UrlResults;