import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {AppBar, Toolbar, Tabs, Tab,Typography,useMediaQuery, useTheme, Box} from "@mui/material"
import pic from "./2.png"
import GlobalButton from '../Theme/GlobalButton';

import {
  RiInboxArchiveFill
} from "react-icons/ri";
import {
  MdOutlineSupportAgent
} from "react-icons/md";

const useStyles = makeStyles((theme)=>({
  root:{
    width:"100%",
    height:"auto",
    
    paddingTop:"50px",
    display:"flex",
    justifyContent:"center",

    "@media (max-width: 800px)":{
        paddingTop:"20px",
        height:"auto"
   },

   "& .allContent":{
    width:"75%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
 

    "@media (max-width: 800px)":{
        width:"90%",      
   }
   },

   "& .Title":{
    height:"30px",
    display:"flex",
    justifyContent:"center",
    width:'100%',
    alignItems:"Center",
    

    "& .MuiTypography-root":{
        fontSize:"30px",
        fontWeight:"500",
        color:theme.typography.color,
        lineHeight:"40px",
     
        
        "@media (max-width: 800px)":{
            fontSize:"15px",
            fontWeight:"600",
            
       },

      },

},

"& .subTitle":{
  height:"auto",
  display:"flex",
  justifyContent:"center",
  alignItems:"Center",
  paddingTop:"10px",

  "& .MuiTypography-root":{
      fontSize:"15px",
      fontWeight:"500",
      color:theme.typography.color,
      lineHeight:"40px",
      textAlign:"center",
      lineHeight:"20px",
      marginTop:"1px",
      marginBottom:"10px",

    },
},

"& .bothCard":{
  display:"flex",
  width:"85%",
  height:"auto",
  alignItems:"center",
  justifyContent:"space-around",
  flexWrap:"wrap",
 


  
},

"& .card1":{
  height:"auto",
  width:"380px",
  backgroundColor:"#F5F6F6",
  // boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  paddingTop:"40px",
  paddingBottom:"40px",
  paddingLeft:"10px",
  paddingRight:"10px",
  marginTop:"15px",
},

"& .contentCon":{

  height:"auto",
  marginBottom:"20px",
  marginTop:"10px",
  "& .MuiTypography-root":{
    textAlign:"center"

  },

},
"& .cardTitle":{
  height:"40px",
  width:"100%",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",

  
  "& .MuiTypography-root":{
    fontSize:"20px",
    fontWeight:"700",
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

function Testimony() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
        <Box className='allContent'>
        <Box className='Title'><Typography> Customer's  Testimony</Typography></Box>
        <Box className='subTitle'>
            <Typography>Join with others who are getting the support they need</Typography>
        </Box>
        <br/>
        <Box className="bothCard">

        <Box className='card1'>
        <Box>
        <RiInboxArchiveFill style={{color:"#1d5589", fontSize:"80px"}}/>
        </Box>
        <Box className='cardTitle'>
        <Typography> Trained Peer Supporters</Typography>
       </Box>
        <Box className='contentCon'
        >
        <Typography>Our Peer Supporters Offer s wide range of the life experiences... search and connect with one that can meet your needs.</Typography>
        </Box>
        <Box><GlobalButton>Browse Peer</GlobalButton></Box>
        
        </Box>
        <Box className='card1'>
        <Box>
        <MdOutlineSupportAgent style={{color:"#1d5589", fontSize:"80px"}}/>
        </Box>
        <Box className='cardTitle'>
        <Typography>Support Organizations & Nonprofits</Typography>
       </Box>
        <Box className='contentCon'
        >
        <Typography>Find and subscribe to an organization that helps like you.Checkout the meetings and chatrooms they offer.</Typography>
        </Box>
        <Box><GlobalButton>Browse Peer</GlobalButton></Box>
        
        </Box>
        
        </Box>
        </Box>
    </Box>
  )
}

export default Testimony