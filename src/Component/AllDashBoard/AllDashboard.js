import React from 'react'
import {Home, HeaderDash,SignUp, Verification,Login, Header,Dashboard} from "../AllPages/Index.js"
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from '../Global/PrivateRoute.js';
import ViewAdd from '../Dashboard/ViewAddRecent.js';
import RecentAll from '../Dashboard/RecentAll.js';
import AgentAll from '../Dashboard/AgentAll.js';
import AddMyAgent from "../Dashboard/AddMyAgent"


function AllDashboard ()
{
  const user = useSelector((state) => state.persistedReducer.user);
  return (
    <>
      {
        user?.status === "admin" ? (
          <div>
          <Routes>
             <Route  path='/dash' element={<Dashboard/>} />
             <Route  path='/allagent' element={<AgentAll/>} />
             <Route  path='/agentadd' element={<AddMyAgent/>} />
             <Route  path='/recent' element={<RecentAll/>} />    
         
          </Routes>     
          </div>
        ) :null
      }
        
          
      </>
  )
}

export default AllDashboard