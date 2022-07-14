import React from 'react'
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import GlobalButton from '../../Theme/GlobalButton';
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"

import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';
import ImageAspectRatioOutlinedIcon from '@mui/icons-material/ImageAspectRatioOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';

const useStyles = makeStyles((theme)=>({
    root:{
        width: "96%",
        height: "auto",
        
        display:"flex",
       
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems:"center",
        
       
        

          "@media (max-width: 800px)":{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems:"center",
            },

        "& .box1": {
            width: "23%",
          
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            backgroundColor: "#edf3f9",
            height: "100px",
            marginTop: "10px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            
             "@media (max-width: 800px)":{
                width:"90%",
            },
        },
        "& .box2": {
               width: "23%",
           
            backgroundColor: "#edf3f9",
              marginTop:"10px",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            borderRadius: "5px",
              display: "flex",
            justifyContent: "center",
            alignItems:"center",
             height: "100px",
             "@media (max-width: 800px)":{
                width:"90%",
            },
            
        },
        "& .box3": {
            width: "23%",
           
            backgroundColor: "#edf3f9",
             marginTop:"10px",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
             borderRadius:"5px",
            height: "100px",
             display: "flex",
            justifyContent: "center",
            alignItems:"center",

             "@media (max-width: 800px)":{
                width:"90%",
            },
        },
        "& .box4": {
            width: "23%",
         
            backgroundColor: "#edf3f9",
             marginTop:"10px",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
             borderRadius:"5px",
            height: "100px",
             display: "flex",
            justifyContent: "center",
            alignItems:"center",

             "@media (max-width: 800px)":{
                width:"90%",
            },
        },

        "& .holderBox": {
            width: "91%",
            height: "80px",
            
            display: "flex",
            alignItems: "center",
            
        },
        "& .circleCon": {
            height: "60px",
            width: "60px",
            borderRadius:"50%",
            backgroundColor: "#1E88E5",
            display: "flex",
            justifyContent: "center",
            alignItems:"center"
            
        },
        "& .circleCon2": {
            height: "60px",
            width: "60px",
            borderRadius:"50%",
            backgroundColor: "#FFB22B",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            
        },
        "& .circleCon3": {
            height: "60px",
            width: "60px",
            borderRadius:"50%",
            backgroundColor: "#7460EE",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            
        },
        "& .circleCon4": {
            height: "60px",
            width: "60px",
            borderRadius:"50%",
            backgroundColor: "#FC4B6C",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            
        },
        "& .figureCon": {
            marginLeft: "6px",
           
        },
        "& .textCon": {
            
            "& .MuiTypography-root":{
                fontSize:"15px",
                marginTop: "-5px",
                 color:"#223862",
              },
      
        },
        "& .textC": {
            
            "& .MuiTypography-root":{
                fontSize: "20px",
                fontWeight: "600",
                letterSpacing: "1px",
                color:"#223862"
               
              },
      
        }
    }
}))

function TotalAgentTrack ()
{
    const classes = useStyles()
  return (
      <Box className={classes.root}>
          <Box className='box1'>
              <Box className='holderBox'>
                  <Box className='circleCon'>
                      <SubjectOutlinedIcon style={{color:"#DBE2E6", fontSize:"35px"}}/>
                  </Box>
                  <Box className='figureCon'>
                      <Box className='textC'><Typography>10</Typography></Box>
                      <Box className='textCon'><Typography> Customer</Typography></Box>
                  </Box>
              </Box>
          </Box>
          <Box className='box2'>
               <Box className='holderBox'>
                  <Box className='circleCon2'>
                       <AddLocationOutlinedIcon style={{color:"#DBE2E6", fontSize:"35px"}}/>
                  </Box>
                  <Box className='figureCon'>
                      <Box className='textC'><Typography>10</Typography></Box>
                      <Box className='textCon'><Typography>Covered Location</Typography></Box>
                  </Box>
              </Box>
          </Box>
          <Box className='box3'>
               <Box className='holderBox'>
                  <Box className='circleCon3'>
                       <QuickreplyOutlinedIcon style={{color:"#DBE2E6", fontSize:"35px"}}/>
                  </Box>
                  <Box className='figureCon'>
                      <Box className='textC'><Typography>2</Typography></Box>
                      <Box className='textCon'><Typography>New Customer</Typography></Box>
                  </Box>
              </Box>
          </Box>
          <Box className='box4'>
               <Box className='holderBox'>
                  <Box className='circleCon4'>
                       <PermContactCalendarOutlinedIcon style={{color:"#DBE2E6", fontSize:"35px"}}/>
                  </Box>
                  <Box className='figureCon'>
                      <Box className='textC'><Typography>10</Typography></Box>
                      <Box className='textCon'><Typography>Notification</Typography></Box>
                  </Box>
              </Box>
          </Box>
          
      </Box>
  )
}

export default TotalAgentTrack