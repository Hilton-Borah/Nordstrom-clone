import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [isAuth,setisAuth] = useState(false)
    const [cart,setCart] = useState([])
    const [count,setCount] = useState(0)
    const [onetime,setOnetime] = useState({})
    const [total,setTotal] = useState(0)
    const [auth,setAuth] = useState(false)
  return (
    <div>
      <AuthContext.Provider value={{isAuth,setisAuth,cart,setCart,onetime,setOnetime,count,setCount,total,setTotal,auth,setAuth}}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
