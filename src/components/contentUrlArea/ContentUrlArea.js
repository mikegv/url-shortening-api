import React, { useState } from 'react';
import './contentUrlArea.css'
import ShortUrlArea from '../shortUrlArea/ShortUrlArea';
import Info from '../info/Info';
import UrlResults from '../urlResults/UrlResults';

const ContentUrlArea = () => {
    const [shortUrls, setShortUrls] = useState([])

    const addShortUrl = (result) => {
        console.log(result)
        let code = result.result.code
        let enteredUrl = result.result.original_link
        let shortLink = result.result.full_short_link2
        setShortUrls(prevState => [...prevState, <UrlResults key={code} enteredUrl={enteredUrl} shortUrl={shortLink} />])
    }

    return (
        <div className='contentUrlArea content'>
            <ShortUrlArea addShortUrl={addShortUrl} />
            {
                shortUrls.length > 0 && shortUrls
            }
            <Info />
           
        </div>
    );
};

export default ContentUrlArea;