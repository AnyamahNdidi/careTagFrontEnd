import logo from './logo.svg';
import React from "react";
import './App.css';
import {Header, Home, SignUp, Login, Verification, Dashboard, Sort,} from "./Component/AllPages/Index"
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import {ThemeProvider} from "@mui/material/styles"
import {theme} from "./Component/Theme/GlobalTheme"
import { UseProvider } from "./Component/GlobalContex/Globastate"
import Main from "./Component/Main/Main"
import AllDashboard from './Component/AllDashBoard/AllDashboard';
import AllAgent from './Component/AgentDash/AllAgent';

function App() {
  return (
    <div >

    <ThemeProvider theme={theme}>
    <UseProvider>
          <BrowserRouter>
            <Main />
            <AllDashboard/>
            <AllAgent/>
          </BrowserRouter>
    </UseProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
