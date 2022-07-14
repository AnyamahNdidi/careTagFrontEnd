import React from 'react'
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";


import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import HeaderDash from "../Dashboard/HeaderDash"



import AllAgentTable from './Overview/AllAgentTable';

const useStyles = makeStyles((theme)=>({
    root:{
        height:"100vh",
        flex:"1",
       
        display:"flex",
    flexDirection: "column",

    "@media (max-width: 800px)":{
      
         width:"100%",
            },

    "& .allCon": {
      height:"auto",
      width: "100%",
    
      display: "flex",
      flexDirection: "column",
      
    
      overflowY:'scroll',
      // backgroundColor:"#f6f9fc",

       "@media (max-width: 800px)":{
         height: "auto",
         width:"100%",
            },
    }
    
       
    }
}))
function DisplayAll() {
  const classes = useStyles()
  return (
    <>
    
       <Box className={classes.root}>
        <HeaderDash />
      <Box className='allCon'>
      
       
          <AllAgentTable/>
          <br/>
          <br/>
          <br/>
          
          
      </Box>
      
    </Box>
 
    </>
    )
}

export default DisplayAll