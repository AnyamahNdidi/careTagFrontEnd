import React from 'react'
import {AppBar, Toolbar, Tabs, Tab,Typography,useMediaQuery, useTheme, Box} from "@mui/material"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import GlobalButton from "../Theme/GlobalButton"
import { display, flexbox, width } from '@mui/system';
import {Link} from "react-router-dom"
import pic from "./1.png"


const useStyles = makeStyles((theme)=>({
    root:{
        height:"550px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        backgroundColor:"#a6c4e1",

        "@media (max-width: 800px)":{
            height:"auto",
            paddingTop:"150px",
            paddingBottom:"20px",
       },

      "& .HolderCon":{
            width:"75%",
            height:"100%",
            display:"flex",
            flexWrap:"wrap",

             "@media (max-width: 800px)":{
             width:"100%"
        }
      },
      "& .box1":{
        width:"50%",
       
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",

        "@media (max-width: 800px)":{
            width:"100%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            
            alignItems:"center",
       }
      },
      "& .box2":{
        width:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",

        "@media (max-width: 800px)":{
            width:"100%",
            display:"none",
           
       }
      },
      "& .conDiv":{
          width:"95%",
          height:"auto",
         
          "& .MuiTypography-root":{
            fontSize:"35px",
            fontWeight:"750",
            color:theme.typography.color,
            lineHeight:"40px",

            "@media (max-width: 800px)":{
                textAlign:"center",
                marginTop:"-50px",
                fontSize:"35px",
                }
          },
         


      },

      "& .textBox":{
        height:"50px",
        width:"200px",
       
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"25px",
        borderRadius:"5px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        cursor:"pointer",

        "& .MuiTypography-root":{
            fontSize:"20px",
            fontWeight:"500",
            color:"white",
            lineHeight:"40px"
          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
      },

      "& .box2Image":{
        height:"70%",
        width:"100%",
        
      }


    }
    
}))

function Hero() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
        <Box className='HolderCon'>
            <Box className='box1'>
                <Box className='conDiv'>
                    <Typography>Get Conntected To Your Organization Local Agent Near You.
                    </Typography>
                </Box>
          <Box>
            <Link style={{textDecoration:"none"}} to = "/browseOganisation">
            <GlobalButton
              >Browse Agent</GlobalButton>
              </Link>
                </Box>
            </Box>
            <Box className='box2'>
                <Box className='box2Image'><img src={pic} style={{width:"100%", height:"100%", objectFit:"contain"}}/></Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Hero