import React from 'react';
import './urlResults.css'
import { StyledButton } from '../styledComponents/styledComponents';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const UrlResults = (props) => {
    return (
        <div className='urlResult'>
            <p>{props.enteredUrl}</p>
            <div className='copyLink'>
            <span className='shortUrlResult'>{props.shortUrl}</span>

            <CopyToClipboard text={props.shortUrl} onCopy={() => props.onCopyText(props.index)}>
             <StyledButton copied={props.copied}>{props.copied ? 'Copied' : 'Copy'}</StyledButton>
            </CopyToClipboard>

            </div>
        </div>
    );
};

export default UrlResults;