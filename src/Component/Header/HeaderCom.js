import React from 'react'
import {AppBar, Toolbar, Tabs, Tab,Typography,useMediaQuery, useTheme, Box} from "@mui/material"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DrawerComp from './DrawerComp';
import pix from "./img/3.png"
import { display, flexbox } from '@mui/system';
import GlobalButton from "../Theme/GlobalButton"
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"

const useStyles = makeStyles((theme)=>({
    root:{
        height:"75px",
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
      

        "& .toolsBar":{
            display:"flex",
            justifyContent:"space-between",
            width:"78%",
            height:"75px",
           
        },
        "& .imgSixe":{
            width:"150px",
            height:"100%",
            
            display:"flex",  
        },
        "& .imgHolder":{
            // backgroundColor:theme.palette.primary.main,
            width:"50%",
            height:"100%"

        },
        "& .namepro":{
            height:"100%",
            width:"50%",
            display:"flex",
            alignItems:"center",

            "& .MuiTypography-root":{
                fontSize:"40px",
                fontWeight:"700",
                color:theme.typography.color,
                letterSpacing:"-3px",
                marginLeft:"-16px"
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }

        },
        "& .navBox":{
            width:"600px",
            height:"100%",
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"center",
            cursor:"pointer"
        },
        "& .nav":{

            "& .MuiTypography-root":{
                fontSize:"15px",
                fontWeight:"600",
                color:theme.typography.color,
              
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }
        },
        "& .navCon":{
            width:"100px",
            height:"50%",
            backgroundColor:"#223862",
            color:"white",
         
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"6px",
            boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",

            "& .MuiTypography-root":{
                fontSize:"15px",
                fontWeight:"600",
                color:theme.typography.color,
                textDecoration:"none"
              
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }
        },
        "& .dnavCon":{
            textDecoration:"none",
            color:"#191E23",
        }
    }
    
}))


function HeaderCom() {
    const classes = useStyles()
    const myNavigation = useNavigate()
    const theme = useTheme()
    console.log(theme)
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <div>
      <AppBar elevation={0}  className={classes.root}>
              <Toolbar className='toolsBar'>
                  
            <Box className='imgSixe'>
                      
            <div className='imgHolder'> 
            <img src={pix} style={{width:"90%", height:"90%", objectFit:"contain"}}/>
            </div>
           
            <div className='namepro'>
            <Typography>careTag.</Typography>
            </div>
      </Box>
    {
        isMatch ? 
        (<DrawerComp/>) 
        :
                          (<Box className='navBox'>
                              
                              <Box className='nav'>
                                 <Typography>
                                     <Link to="/" className='dnavCon'>
                                    Home
                                    </Link>
                                  </Typography>
                              </Box>
                              
         <Box className='nav'>
         <Typography>Join as Peer Supporter</Typography>
         </Box>
   
         <Box className='nav'>
         <Typography>About</Typography>
         </Box>
         <Box className='nav'>
         <Typography>Benefits</Typography>
         </Box>
        
        
         <Box className='nav'>
         <Typography>
         <Link to="/tworoute" className='dnavCon'>
         Login
         </Link>
         </Typography>
         </Box>
      
        
         
         <Box className='navCon'  
         onClick={()=>{
            myNavigation("/sign")
          }}
         >
         <Typography>
         
         Register
         </Typography>
         </Box>
        
         
         </Box>)
    }
      </Toolbar>
      </AppBar>
    </div>
  )
}

export default HeaderCom