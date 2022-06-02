import React, { useState } from 'react';
import './contentUrlArea.css'
import ShortUrlArea from '../shortUrlArea/ShortUrlArea';
import Info from '../info/Info';
import UrlResults from '../urlResults/UrlResults';

const ContentUrlArea = () => {
    const [shortUrls, setShortUrls] = useState([])
    const [lastCopied, setLastCopied] = useState(-1)

    const addShortUrl = (result) => {
        console.log(result)
        let code = result.result.code
        let enteredUrl = result.result.original_link
        let shortLink = result.result.full_short_link2
        setShortUrls(prevState => [...prevState, {...result.result, copied: false}])
    }

    const onCopyText = (index) => {
        let urlsArray = shortUrls
        urlsArray[index].copied = true
        if(lastCopied > -1){
            urlsArray[lastCopied].copied = false
        }
        setShortUrls([...urlsArray])
        setLastCopied(index)
    }

    return (
        <div className='contentUrlArea content'>
            <ShortUrlArea addShortUrl={addShortUrl} />
            {
                shortUrls.length > 0 && shortUrls.map((item, index) => <UrlResults onCopyText={onCopyText} key={item.code} index={index} enteredUrl={item.original_link} shortUrl={item.full_short_link2} copied={item.copied} />)
            }
            <Info />
            {console.log(shortUrls)}
           
        </div>
    );
};

export default ContentUrlArea;