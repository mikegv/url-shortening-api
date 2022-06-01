import React from 'react';
import './card.css'

const Card = (props) => {


    return (
        <div className='card' >
            <div className='iconContainer'>
<img src={require(`../../images/${props.cardIcon}`)} />            
</div>
<h3>{props.cardTitle}</h3>
            <p>{props.cardContent}</p>
        </div>
    );
};

export default Card;