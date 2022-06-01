import React from 'react';
import './info.css'
import Card from '../card/Card';

const Info = () => {
    return (
        <div className='info'>

            <h1>Advanced Statistics</h1>

            <p>Track how your links are performing across the web with <br />our
                advanced statistics dashboard.</p>
            <div className='cardContainer'>
                <Card
                    cardTitle='Brand Recognition'
                    cardContent='Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
                    cardIcon='icon-brand-recognition.svg' 
                    move='0'
                />



                <Card
                    cardTitle='Detailed Records'
                    cardContent='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
                    cardIcon='icon-detailed-records.svg'
                    move='1'
                />

                <Card
                    cardTitle='Fully Customizable'
                    cardContent='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
                    cardIcon='icon-fully-customizable.svg'
                    move='2'
                />

            </div>

            Boost your links today

            Get Started
        </div>
    );
};

export default Info;