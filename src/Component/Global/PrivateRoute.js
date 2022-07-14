import React from 'react'
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import decoder from "jwt-decode"
import { Dashboard, Home } from '../AllPages/Index'
import Index from '../Dashboard/Index'
import  AgentOveiw from "../AgentDash/AgentOveiw"



function PrivateRoute ({ children })
{
    const user = useSelector((state) => state.persistedReducer.user) 
    
    if (user)
    {
        const token = decoder(user?.token);
        
        if (token)
        {
            return token?.status === "admin" ? (<Index />) : token?.status === "agent" ?
                (<AgentOveiw/>) : null
        }
    }
    return <Home />;
  
}

export default PrivateRoute