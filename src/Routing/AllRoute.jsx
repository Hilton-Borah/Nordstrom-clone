import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Componants/Cart/Cart'
import SignUpEmail from '../Componants/LogSign/SignUp'
import SignUpPassword from '../Componants/LogSign/Login'
import Home from "../MainPages/Home"
import Address from '../Componants/Cart/Address'
import ProductInfo from '../Componants/ProductPages/ProductInfo'
import Female from '../Componants/ProductPages/Female'
import Male from '../Componants/ProductPages/Male'
import Payment from '../Componants/Cart/Payment'
import PrivateRoute from '../Componants/PrivateRoute/PrivateRoute'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUpEmail/>}></Route>
        <Route path='/login' element={<SignUpPassword/>}></Route>
        <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
        <Route path='/address' element={<PrivateRoute><Address/></PrivateRoute>}></Route>
        <Route path='/productdetails' element={<PrivateRoute><ProductInfo/></PrivateRoute>}></Route>
        <Route path='/femaleclothing' element={<PrivateRoute><Female/></PrivateRoute>}></Route>
        <Route path='/maleclothing' element={<PrivateRoute><Male/></PrivateRoute>}></Route>
        <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoute
