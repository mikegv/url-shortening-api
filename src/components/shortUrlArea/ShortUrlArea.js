import React, { useState, useRef } from 'react';
import './shortUrlArea.css'
import { StyledButton } from '../styledComponents/styledComponents'

const ShortUrlArea = (props) => {
    const [error, setError] = useState(false)
        
   const textRef=useRef()
    
    function handleSubmit(){
        if(textRef.current.value.length === 0){
            setError(true)
            return
        }
         if(error){
             setError(false)
         }
         let enteredText = textRef.current.value
        fetch(`https://api.shrtco.de/v2/shorten?url=${enteredText}`)
            .then(result => result.json())
            .then(data => {
                console.log(data)
                props.addShortUrl(data)
                textRef.current.value = ''        
            })
    }
    let setBorder = error ? {border:'solid red 2px'} : {}
    return (
        <div className='shortUrlArea'>
            <input type='text' placeholder='Shorten a link here...' ref={textRef} style={setBorder} />
            {error && <p>Please add a link</p>}
            <StyledButton onClick={handleSubmit} size='large' style={{ marginTop: '0px', borderRadius: '10px' }}>Shorten It!</StyledButton>
        </div>
    );
};

export default ShortUrlArea;