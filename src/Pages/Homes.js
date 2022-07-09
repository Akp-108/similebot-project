import React from 'react'
import {porducts} from '../componet/Json'
import Card from '../componet/Card'
import '../componet/css/Card.css'
const Homes = () => {
  return (
    <div>
      
      <section className='cards__container'>{
           porducts.details.map((v)=>{
                return(
                    <div>
                <Card name = {v.name} 
                    Img ={v.imageURL}
                 price = {v.price} />
                 </div>
                )
            })
        }
        </section>
    </div>
  )
}

export default Homes