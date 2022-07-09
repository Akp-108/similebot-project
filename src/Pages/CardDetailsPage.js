import React from 'react'
import { useLocation } from 'react-router-dom';

import './pcss/CardDet.css'
const CardDetailsPage = () => {
    const location = useLocation();
    const {name, Img, price,discription} = location.state;
    // console.log(title)
      return (
        <div className='single_top'>
        <div className='single__page'>
          <div className='card_details_left'>
            <img src={Img} alt="" />
            </div>
            <div className='card_details_right'>
            <h3>{name}</h3>
            <p>{discription}</p>
            <p>{price}</p>
            <div>
    
    <a href="/order"><button >Buy Now</button>  </a>
    </div>
            </div>
        </div>
        </div>  
      )
}

export default CardDetailsPage