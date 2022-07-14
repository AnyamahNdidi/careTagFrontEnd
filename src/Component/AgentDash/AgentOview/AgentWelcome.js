import React, {useContext} from 'react'
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {UserContext} from "../../GlobalContex/Globastate"

import GlobalButton from '../../Theme/GlobalButton';
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"


const useStyles = makeStyles((theme)=>({
    root:{
        width: "96%",
        height: "70px",
       
        display:"flex",
       
        flexWrap: "wrap",
       
        alignItems:"center",
        
        marginTop: "15px",
        

          "@media (max-width: 800px)":{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height:"auto",
            },
      
        "& .ddbox1": {
            width: "100%",
            height: "70px",
            
             
            "@media (max-width: 800px)":{
                width: "90%",
                height: "auto",
                
         
            },
        },
        "& .userWelcome": {
            height: "100%",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            
             "@media (max-width: 800px)":{
                width: "100%",
                height: "auto",
                
         
            },
           
        },
        "& .userNameCon": {
            
            
              "& .MuiTypography-root":{
                fontSize:"20px",
                fontWeight:"600",
                color:"#808080",
              },
        }
      
      
    }
}))

function AgentWelcome ()
{
     const { user, setSelectedChat, chat, setChat,
        toggle,  overViewButton,allButton,addBtton,activeButton,customerButton } = useContext(UserContext)
    const classes = useStyles()
  return (
      <Box className={classes.root}>
          <Box className='ddbox1'>
              <Box className='userWelcome'>
                  <Box className='userNameCon'><Typography>Hi, Welcome! {user?.agentName}  </Typography></Box>
                  <Box className='desUser'><Typography>Provide Surpport, and all Location.   </Typography></Box>
                  
              </Box>
          </Box>
        
          
      </Box>
  )
}

export default AgentWelcome