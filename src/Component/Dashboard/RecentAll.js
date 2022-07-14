import React,{useState,useContext,useEffect} from 'react'
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import GlobalButton from '../Theme/GlobalButton';
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import SideBar from './SideBar';
import Overview from './Overview/Overview';
import { UserContext } from "../GlobalContex/Globastate"
import AddAgent from './AddAgent';
import DisplayAll from './DisplayAll';
import ViewAdd from "./ViewAddRecent"

const useStyles = makeStyles((theme)=>({

    root:{
      width:"100%",
      height:"100vh",
      display:"flex",

     
    }
   
}))
function RecentAll ()
{
  
      const { user, setSelectedChat, chat, setChat,
        toggle, overView, setOverView,
        allAgent, setAllAgent, addAgent,
        setAddAgent, active, setActive,
        customer, setCustomer } = useContext(UserContext)

   
    
  const classes = useStyles()
  return (
   
      <Box className={classes.root}>
      <SideBar />
      <ViewAdd/>
      </Box>
 
  )
}

export default RecentAll