import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Navigation from './componet/Navigation'
import Home from './Home'
import Contect from './Pages/Contect'
import Fav from './Pages/Fav'
import Homes from './Pages/Homes'
import Order from './Pages/Order'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element = {<Homes /> } />
        <Route path='/Home' element = {<Homes /> } />
        <Route path='/contect' element = {<Contect /> } />
        <Route path='/fav' element = {<Fav /> } />
        <Route path='/order' element = {<Order /> } />
        <Route path='/profile' element = {<Profile /> } />
      {/* <Home /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App