import React from 'react';
import './card.css'

const Card = (props) => {
    let by =  props.move === '0' ? '-50px' : props.move === '2' ? '50px' : '0%'
    return (
        <div className='card' style={{transform:`translateY(${by})`}}>
            
            <div className='iconContainer'>
<img src={require(`../../images/${props.cardIcon}`)} />            
</div>
<h3>{props.cardTitle}</h3>
            <p>{props.cardContent}</p>
        </div>
    );
};

export default Card;