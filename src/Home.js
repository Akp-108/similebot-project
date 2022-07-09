import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './componet/Nav'
import Contect from './Pages/Contect'
import Fav from './Pages/Fav'
import Order from './Pages/Order'

const Home = () => {
  return (
    <div>
        <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/' element = {<Contect />} />
        <Route path='/' element = {<Fav />} />
        <Route path='/' element = {<Order />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Home