import React from 'react'
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import pix from "./img/3.png"
import GlobalButton from '../Theme/GlobalButton';
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"

const useStyles = makeStyles((theme)=>({
    root:{
        height:"75px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
        "& .drawerList":{
            backgroundColor:"#a6c4e1",
           
        },
        "& .textAligntext":{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
          
            width:"100%"
           
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
        "& .textmanin":{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",

            "& .MuiTypography-root":{
                fontSize:"20px",
                fontWeight:"600",
                color:"#314A72",
              
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }
        },
        "& .holderConn":{
            width:"75%",
            height:"60px",
           
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }

    }
    
}))

function DrawerComp() {
  const [openDrawer, setOpenDrawer] = React.useState(false)
  const classes = useStyles()
  const myNavigation = useNavigate()
  return (
      < React.Fragment>
           <Drawer  className={classes.root} open={openDrawer} anchor="top" onClose={()=> setOpenDrawer(false)}>
         
        <List className='drawerList'>
        <Box className='holderConn'>
    <Box className='imgSixe'>
        <div className='imgHolder'> 
        <img src={pix} style={{width:"90%", height:"90%", objectFit:"contain"}}/>
        </div>
       
        <div className='namepro'>
        <Typography>careTag.</Typography>
        </div>
    </Box>
    </Box>
          <ListItemButton onClick={()=> {
            myNavigation("/")
            setOpenDrawer(false)
          } } 
          >
            <ListItemIcon className='textAligntext'>
              <ListItemText className='textmanin'>
              <Typography>Home</Typography>
              
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={()=> setOpenDrawer(false)}>
            <ListItemIcon className='textAligntext'>
              <ListItemText className='textmanin'>
              <Typography>Join as Peer Supporter</Typography>
              
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={()=> setOpenDrawer(false)}>
            <ListItemIcon className='textAligntext'>
              <ListItemText className='textmanin'> <Typography>About</Typography></ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={()=> setOpenDrawer(false)}>
            <ListItemIcon className='textAligntext'>
              <ListItemText className='textmanin'><Typography>Benefits</Typography></ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={()=> {
            myNavigation("/tworoute")
            setOpenDrawer(false)
          } } >
            <ListItemIcon className='textAligntext'>
              <ListItemText className='textmanin'><Typography>Login</Typography></ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={()=> {
            myNavigation("/sign")
            setOpenDrawer(false)
          } } 
          
          >
          <ListItemIcon className='textAligntext'>
          <GlobalButton>Register</GlobalButton>
          </ListItemIcon>
          </ListItemButton>

        </List>
        </Drawer>
        <IconButton sx= {{ color:"#314A72", marginLeft:"auto"}} onClick={()=>setOpenDrawer(!openDrawer)}>
           <MenuIcon/>
        </IconButton>
      </React.Fragment>
 
   
  )
}

export default DrawerComp