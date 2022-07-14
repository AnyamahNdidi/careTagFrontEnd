import React from 'react'
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios"
import GlobalButton from '../../Theme/GlobalButton';
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import HeaderDash from "../HeaderDash"
import TableCon from "./TableCon"



const useStyles = makeStyles((theme)=>({
    root:{
        width: "96%",
        height: "600px",
       
      
        flexWrap: "wrap",
       
        alignItems:"center",
        
    marginTop:"16px",
        
        

         "@media (max-width: 800px)":{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems:"center",
            },
      
        "& .ddbox1": {
            width: "100%",
            height: "400px",
          
          display: "flex",
          justifyContent: "center",
     
             
            "@media (max-width: 800px)":{
              width: "90%",
              height: "300px",
             
         
            },
          }
      
      
    }
}))

function AllAgentTable ()
{
    const classes = useStyles()
  return (
      <Box className={classes.root}>
      <Box className='ddbox1'>
        <TableCon/>
      </Box>
        
         
      </Box>
  )
}

export default AllAgentTable