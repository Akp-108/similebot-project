import React from 'react'
import './css/Navigation.css'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <div>
        <div className='nav__container'>
            <div className="rigth">
      <ul>
        <li><Link to= "/home" style={{textDecoration: 'none', color : 'black'}} >Bella</Link> </li>
        <li><Link to= "/home" style={{textDecoration: 'none', color : 'black'}} >HOME</Link> </li>
        <li><Link to= "/fav" style={{textDecoration: 'none', color : 'black'}} >Favorites</Link> </li>
        <li><Link to= "/order" style={{textDecoration: 'none', color : 'black'}} >Order</Link> </li>
        <li><Link to= "/contect" style={{textDecoration: 'none', color : 'black'}} >Contect</Link> </li>              
       </ul>
       </div>
       <div className="left">
        <ul>
            <li>
            <li><Link to= "/profile" style={{textDecoration: 'none', color : 'black'}} >Profile</Link> </li>
            </li>
        </ul>
       </div>
      
    </div>
    </div>
  )
}
export  default Navigation;