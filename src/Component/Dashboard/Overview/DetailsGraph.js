import React from 'react'
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import GlobalButton from '../../Theme/GlobalButton';
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import HeaderDash from "../HeaderDash"
import Sample from './Sample.js';
import Donut from './Donut.js';
import pic  from "./1.png"


const useStyles = makeStyles((theme)=>({
    root:{
        width: "96%",
        height: "600px",
       
        display:"flex",
       
        flexWrap: "wrap",
       
        alignItems:"center",
        
        marginTop: "15px",
        

          "@media (max-width: 800px)":{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems:"center",
            },
      
        "& .ddbox1": {
            width: "100%",
            height: "auto",
           
            display: "flex",
            flexWrap: "wrap",
            justifyContent:"space-between",
             
            "@media (max-width: 800px)":{
              width: "90%",
         
            },
        },
        "& .rightBox": {
            
            width: "63%",
            height: "400px",
            backgroundColor: "blue",
            backgroundColor: "#EDF3F9",
            borderRadius: "5px",
            marginBottom:"10px",
            
            "@media (max-width: 800px)":{
                width: "100%",
              
                height:"auto",
         
            },
        },
      
        "& .leftBox": {
            width: "35%",
            height: "400px",
            
            backgroundColor: "#EDF3F9",
            borderRadius: "5px",
            marginBottom: "10px",
            display: "flex",
            flexDirection:"column",
            
            
            "@media (max-width: 800px)":{
                width: "100%",
                height:"auto",
                
         
            },
        },
        "& .pieCon": {
            width: "100%",
            height: "auto",
            
            
             "@media (max-width: 800px)":{
               height:"auto"
         
            },
        },
        "& .dRenCon": {
            display: "flex",
            flexDirection:"column"
        },
        "& .reCon": {
            width: "100%",
            height: "30px",
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            
             "& .MuiTypography-root":{
                fontSize:"15px",
                 color: "#223862",
                 fontWeight: "600",
                 letterSpacing:"6px",
                 
              },
        },
        "& .drecentBox": {
            height: "60px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
        },
        "& .holderdCon": {
            width: "90%",
            height: "100%",
            display:"flex",
        },
        "& .boxImage": {
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor:"pink"
        },
        "& .nameLocaton": {
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            
            "& .MuiTypography-root":{
                fontSize:"13px",
                color: "#223862",
                 marginTop:"5px",
                 
                 
                 
              },
        },
        "& .locationCon": {
            marginTop:"-7px",
        },
        "& .nameCoon": {
             marginTop:"5px",
        }
      
      
    }
}))

function DetailsGraph ()
{
    const classes = useStyles()
  return (
      <Box className={classes.root}>
          <Box className='ddbox1'>
              <Box className='rightBox'>
                  <Sample/>
              </Box>
              <Box className='leftBox'>
                  <Box className='pieCon'><Donut/></Box>
                  <Box className="dRenCon">
                      <Box className='reCon'><Typography>Recent Agent Added</Typography></Box>
                      <Box className='drecentBox'>
                          <Box className='holderdCon'>
                              <Box className='boxImage'>
                                  <img src={pic} style={{width:"100%", height:"100%", borderRadius:"50%"}}/>
                              </Box>
                              <Box className='nameLocaton'>
                                  <Box className='nameCoon'><Typography>David Brooks</Typography></Box>
                                  <Box className='locationCon'><Typography>Ikeja Lagos</Typography></Box>
                              </Box>
                          </Box>
                      </Box>
                  </Box>
                  
              </Box>
          </Box>
        
          
      </Box>
  )
}

export default DetailsGraph