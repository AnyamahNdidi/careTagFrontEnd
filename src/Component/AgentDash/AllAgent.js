import React from 'react'
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AgentOveiw from "./AgentOveiw"
import AgentCus from './AgentCus';
import AgentMess from './AgentMess';


function AllAgent ()
{
 const user = useSelector((state) => state.persistedReducer.user);

  return (
     <>
      {
        user?.status === "agent" ? (
          <div>
          <Routes>
             <Route  path='/agent' element={<AgentOveiw/>} />
             <Route  path='/customer' element={<AgentCus/>} />
             <Route  path='/message' element={<AgentMess/>} />
             
         
          </Routes>     
          </div>
        ) :null
      }
        
          
      </>
  )
}

export default AllAgent