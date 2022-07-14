import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {AppBar, Toolbar, Tabs, Tab,Typography,useMediaQuery, useTheme, Box} from "@mui/material"
import pic from "./2.png"
import GlobalButton from '../Theme/GlobalButton';
import Card from "./Card"
import Card2 from './Card2';

const useStyles = makeStyles((theme)=>({
    root:{
      width:"100%",
        height:"auto",
        paddingTop:"50px",
        display:"flex",
        justifyContent:"center",
        backgroundColor:"#F5F6F6",
        paddingBottom:"30px",
       

        "@media (max-width: 800px)":{
            paddingTop:"20px",
       },

       
       "& .allContent":{
        width:"75%",
        display:"flex",
        flexDirection:"column",
     

        "@media (max-width: 800px)":{
            width:"90%", 
            height:"auto",     
       }
        
       
    },

    "& .Title":{
      height:"50px",
      display:"flex",
      justifyContent:"center",
      width:'100%',
      alignItems:"Center",

      "& .MuiTypography-root":{
          fontSize:"30px",
          fontWeight:"500",
          color:"#446280",
          lineHeight:"40px",
          
          "@media (max-width: 800px)":{
              fontSize:"25px",
              fontWeight:"500",
              textAlign:"center",
              lineHeight:"25px",
              
         },

        },
  },
  "& .subTitle":{
    height:"auto",
    display:"flex",
    justifyContent:"center",
    alignItems:"Center",
    paddingTop:"20px",
 
  
  
 

    "& .MuiTypography-root":{
        fontSize:"22px",
        fontWeight:"500",
        color:theme.typography.color,
        lineHeight:"40px",
        textAlign:"center",
        lineHeight:"20px",
        marginTop:"10px",
        marginBottom:"10px",

      },
},
    }


}))

function Explore() {
    const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className='allContent'>
        <Box className='Title'>
          <Typography>Explore Our Peer Support Community</Typography> 
        </Box>
        <Box className='subTitle'>
            <Typography>We offer peer support groups, one to one coaching, and private chat rooms where you can find meetings and conversations that can help you on your journey.</Typography>
        </Box>
        <br/>
        <br/>
        <Box>
        <Card/>
        <Card2/>
        </Box>
        </Box>
    </Box>
  )
}

export default Explore