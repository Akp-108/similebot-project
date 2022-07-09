import React from 'react'

const Card = (props) => {
    const{Img,name,price} = props;
  return (
    <div className='product_card'>
        <div className='card__img'>
    <img src={Img} alt={name} />
    </div>
    <h4>{name}</h4>
    <h5>{`Rs. ${price} `}</h5></div>
  )
}

export default Card