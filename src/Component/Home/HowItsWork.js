import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {AppBar, Toolbar, Tabs, Tab,Typography,useMediaQuery, useTheme, Box} from "@mui/material"
import pic from "./2.png"
import GlobalButton from '../Theme/GlobalButton';
const useStyles = makeStyles((theme)=>({
    root:{
        width:"100%",
        height:"500px",
        
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

            "@media (max-width: 800px)":{
                width:"90%",      
           }
            
           
        },
        "& .Title":{
            height:"50px",
            display:"flex",
            justifyContent:"center",
            width:'100%',
            alignItems:"Center",
            backgroundColor:"#F5F6F6",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",

          
            
          

            "& .MuiTypography-root":{
                fontSize:"25px",
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
            height:"60px",
            display:"flex",
            justifyContent:"center",
            alignItems:"Center",
          
         

            "& .MuiTypography-root":{
                fontSize:"22px",
                fontWeight:"500",
                color:"#446280",
                lineHeight:"40px",
                textAlign:"center",
                lineHeight:"20px",
                marginTop:"10px",
                marginBottom:"10px",
    
              },
        },
        "& .BoxInfo":{
            height:"350px",
            width:"100%",
          
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:"center",


            "@media (max-width: 800px)":{
                width:"100%",
                height:"auto",
                
           }
        },
        "& .box1":{
            height:"100%",
            
            width:"50%",
            display:"flex",
           
            alignItems:"center",
            "@media (max-width: 800px)":{
                width:"90%",
                height:"300px"
           }
        },
        "& .box2":{
            height:"100%",
            display:"flex",
            flexDirection:"column",
            width:"50%",
            justifyContent:"center",

            "@media (max-width: 800px)":{
                width:"90%",
                height:"300px"
           }
        },

    }
}))

function HowItsWork() {
    const classes = useStyles()
  return (
    <Box className = {classes.root}>
      <Box  className='allContent'>
         <Box className='Title'>
         <Typography> HOW IT WORKS</Typography>
        
         </Box>
         <Box className="subTitle">
          <Typography>Start Creating a Free Account</Typography> 
         </Box>
         <Box className='BoxInfo'>
            <Box className='box1'>
            <Box><img src={pic}/></Box>
            </Box>
            <Box className='box2'>
         
                <Box className='textContent'>
                Create your free CareTags account and safely connect with peer support groups, 
                coaches, and trained peer support specialists anytime and anywhere 
                from any device.
                </Box>
                <Box className='buttonCon'>
                <GlobalButton>
                    Click To Start
                </GlobalButton>
                </Box>
            </Box>
         </Box>
     </Box>
    </Box>
  )
}

export default HowItsWork