import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home, SignUp, Verification, Login, Header,LoginAs,AgentLogin, Locationmap} from "../AllPages/Index.js"
import PrivateRoute from '../Global/PrivateRoute.js';
import { useSelector } from "react-redux";
import AgentLocation from '../LocationAgent/AgentLocation.js';

function Main ()
{
  const user = useSelector((state) => state.persistedReducer.user) 
  console.log("na the current user be this",user)
  return (
    <>
  
      <Routes>
        {
          !user ?
            (
              <> 
               <Route  path='/sign' element={<SignUp/>} />
               <Route  path='/login' element={<Login/>} />
               <Route path='/agentlogin' element={<AgentLogin />} /> 
               <Route path='/mapShow' element={<Locationmap />} /> 
               <Route  path='/browseOganisation' element={<AgentLocation/>} />
               <Route  path='/tworoute' element={<LoginAs/>} />
               <Route path='/api/admin/:id/:token' element={<Verification />} />
               <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
            </>
          )
            :
            (
              <>
                <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
              </>
             )
        }
       </Routes>
      </>
  )
}

export default Main