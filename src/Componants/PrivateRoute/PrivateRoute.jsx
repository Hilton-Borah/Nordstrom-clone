

import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { Link } from "react-router-dom"
import "../PrivateRoute/PrivateRoute.css"

const PrivateRoute = ({children}) => {
 
    const {auth} = useContext(AuthContext)
    if (auth===false){
        alert("You are not Login. Please login first")
        return <Navigate to="/"/>

    //     return <div className="alert">
    //     <span className="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
    //     <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
    //   </div>
    }

  return children
 
}
export default PrivateRoute
