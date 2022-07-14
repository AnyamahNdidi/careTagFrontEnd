import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {AppBar, Toolbar, Tabs, Tab,Typography,useMediaQuery, useTheme, Box} from "@mui/material"
import pic from "./7.png"
import GlobalButton from '../Theme/GlobalButton';

const useStyles = makeStyles((theme)=>({
    root:{
        width:"100%",
        height:"auto",
        backgroundColor:"#1d5589",
        paddingTop:"80px",
        display:"flex",
        justifyContent:"center",
        marginTop:"50px",
        marginBottom:"30px",
        paddingBottom:"60px",
        "@media (max-width: 800px)":{
            paddingTop:"20px",
            height:"auto",
            paddingBottom:"25px",

       },

       "& .allContent":{
        width:"75%",
        height:"90%",
        display:"flex",
        flexWrap:"wrap",

        "@media (max-width: 800px)":{
            width:"90%",
        },

       },
       "& .first":{
           width:"65%",
           height:"100%",
           display:"flex",
           flexDirection:"column",

           "@media (max-width: 800px)":{
            width:"100%",
            marginBottom:"25px",
        },
         
       },
       "& .second":{
           width:'35%',
           height:"100%",
           display:"flex",
           justifyContent:"center",
           alignItems:"center",

           "@media (max-width: 800px)":{
           width:"100%",
       },
        
       },
       "& .textCon":{
     
        width:"100%",
        height:"70px",

        "@media (max-width: 800px)":{
            width:"100%",
            height:"50px",
        },
       
        "& .MuiTypography-root":{
            fontSize:"26px",
            fontWeight:"500",
            color:"#E7FBFF",
            lineHeight:"30px",
          
            marginTop:"10px",
            marginBottom:"10px",
    
          },
       },
       "& .peerContent":{
           width:"90%",
           "& .MuiTypography-root":{
            fontSize:"15px",
            fontWeight:"500",
            color:"#E7FBFF",
            lineHeight:"40px",
           
            lineHeight:"20px",
            marginTop:"10px",
            marginBottom:"10px",
    
          },
       }
    }
}))

function Hey() {
    const classes = useStyles()
  return (
    <Box className={classes.root}>
    <Box className='allContent'>
        <Box className='first'>
        <Box className='textCon'>
        <Typography>Why CareTag works?</Typography>
        </Box>
        <Box className='peerContent'>
        <Typography>We believe that seeking help should be simple, comfortable, safe and familiar. CareTags is our way of making that belief a reality. 
        It is a video and chatroom app that allows people to join support discussions with others who are on similar life journey.The conversations and meetings are provided or led by qualified peers.Every user can browse, join or schedule peer support connection anytime, anywhere from any device.</Typography>
        </Box>
        <Box>
        </Box>
        <GlobalButton>Get Started</GlobalButton>
        </Box>
        <Box className='second'>
            <img src={pic} style={{width:"70%", height:"70%", objectFit:"contain"}}/>
        </Box>
    </Box>
    </Box>
  )
}

export default Hey