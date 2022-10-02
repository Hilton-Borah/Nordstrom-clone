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

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUpEmail/>}></Route>
        <Route path='/login' element={<SignUpPassword/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/cart/address' element={<Address/>}></Route>
        <Route path='/productdetails' element={<ProductInfo/>}></Route>
        <Route path='/femaleclothing' element={<Female/>}></Route>
        <Route path='/maleclothing' element={<Male/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoute
