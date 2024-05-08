import React from 'react'

import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../components/Login'
import PageContainer from '../container/PageContainer'
import {Routes, Route } from 'react-router-dom'
import Payment from '../components/payment/Payment'

const AppRoutes = () => {
  return (
    <Routes>
            <Route path='/' element={<PageContainer/>}  />
            <Route path="/register" element={<Register />} />
            <Route path='/about' element={<About/>}  />
            <Route path='/login' element={<Login/>}  />
            <Route path="/" element={<Home />} />
            <Route path='/payment' element={<RazorpayForm/>}/>
    </Routes>
  )
}

export default AppRoutes