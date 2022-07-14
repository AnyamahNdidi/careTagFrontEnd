import React,{useState,useContext,useEffect} from 'react'
import {AppBar, Toolbar, Tabs, Tab,Typography,useMediaQuery, useTheme, Box,Menu, MenuItem, Button } from "@mui/material"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DashDrawer from './DashDrawer';
import pix from "../Header/img/3.png"
import { display, flexbox } from '@mui/system';
import GlobalButton from "../Theme/GlobalButton"
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import {UserContext} from "../GlobalContex/Globastate"
import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const useStyles = makeStyles((theme)=>({
    root:{
        height:"60px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
       

        "& .toolsBar":{
            display:"flex",
            justifyContent:"space-between",
            width:"100%",
            height:"60px",

            "@media (max-width: 800px)":{
                
                width:"100%",
               
                
            },
           
        },
        "& .imgSixe":{
            width:"300px",
            height:"100%",
            alignItems:"center",
            display:"flex", 
            justifyContent:"space-between",
        
            
            "@media (max-width: 800px)":{
                width:"210px",

            },
            
        },
        "& .logoHolder":{
            display:"none",

            "@media (max-width: 800px)":{
                
                width:"70%",
                height:"100%",
                justifyContent:"center",
                alignContent:"center",
                display:"flex",
               
            },
        },

        "& .myHolderIcon":{
            display:"flex",
            width:"40%",
            justifyContent:"space-between",
           
            "@media (max-width: 800px)":{
                
                width:"30%",
                height:"50%",
               
                
            },
            
        },

        "& .imgHolder":{
            // backgroundColor:theme.palette.primary.main,
            width:"50%",
            height:"100%"

        },
        "& .namepro":{
            height:"100%",
            width:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            

            "& .MuiTypography-root":{
                fontSize:"30px",
                fontWeight:"700",
                color:theme.typography.color,
                letterSpacing:"-3px",
               
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }

        },
        "& .navBox":{
            width:"100px",
            height:"100%",
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"center",
            cursor:"pointer",
           
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
        },

        "& .bugerIcon":{

            "@media (max-width: 800px)":{
                display:"none",
            },
        },

        "& .userCon":{
            display:"none",

            
            "@media (max-width: 800px)":{
                display:"flex",
            },

            "& .MuiMenu-root":{
                width:"400px"
            }
        },
        "& .menuCon":{
            width:"500px",
            backgroundColor:"red",
    },
        
           "& .imageCon":{
            width:"100%",
            height:"100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
          
    },
           "& .imageBox":{
            width:"75%",
            height:"45%",
            borderRadius:"50%",
            boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",
          
           
        },
           "& .imageBox2":{
            width:"75%",
            height:"35%",
            borderRadius:"50%",
           
          
           
        },
    }
    
}))


function HeaderDash() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const classes = useStyles()
    const {user, setSelectedChat, chat, setChat, toggle, setToggle, handleToggle} = useContext(UserContext)
    const myNavigation = useNavigate()
    const theme = useTheme()
    console.log(theme)
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))

 

  return (
    <div>
        <Box className={classes.root}>
        <Toolbar className='toolsBar'>
        <Box className='imgSixe'>
          <Box className='myHolderIcon'>
             <Box className='bugerIcon' onClick={handleToggle}><MenuIcon  style={{ fontSize:"30px", color:"#1D5589"}}/></Box>
             <Box className='bugerIcon' ><NotificationsNoneIcon  style={{fontSize:"30px", color:"#1D5589"}}/></Box>
             <Box className='bugerIcon'><MailOutlineIcon  style={{fontSize:"30px", color:"#1D5589"}}/></Box>

             <Box className='userCon' >
           <Button
           id="basic-button"
           aria-controls={open ? 'basic-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}
         >
        <Box className='imageCon'>
                                <Box className='imageBox2'><img   style={{width:"100%", height:"100%", borderRadius:"50%", objectFit:"cover"}} src={user?.avatar}/></Box>
                        </Box>
         </Button>
         <Menu
           id="basic-menu"
           anchorEl={anchorEl}
           open={open}
           onClose={handleClose}
           MenuListProps={{
             'aria-labelledby': 'basic-button',
           }}
         >
         <MenuItem onClick={handleClose} disableRipple>
         <EditIcon />
         Profile
       </MenuItem>
       <MenuItem onClick={handleClose} disableRipple>
         <NotificationsNoneIcon />
         Notification
       </MenuItem>
       <Divider sx={{ my: 0.5 }} />
       <MenuItem onClick={handleClose} disableRipple>
         <MailOutlineIcon />
         Message
       </MenuItem>
       <MenuItem onClick={handleClose} disableRipple>
         <MoreHorizIcon />
         More
       </MenuItem>
         </Menu>
         
           </Box>

         </Box>   

         <Box className='logoHolder'>
            
            
             <div className='namepro'>
             <Typography>careTag.</Typography>
             </div>
         </Box>
        </Box>
      {
          isMatch ? 
          (<DashDrawer/>) 
          :
           (  <Box className='navBox'>
          
           <Box  style={{fontSize:"30px", color:"#1D5589"}}><SearchOutlinedIcon/></Box>
         
           <Box >
           <Button
           id="basic-button"
           aria-controls={open ? 'basic-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}
         >
        
                    <Box className='imageCon'>
                                <Box className='imageBox'><img   style={{width:"100%", height:"100%", borderRadius:"50%", objectFit:"cover"}} src={user?.avatar}/></Box>
                        </Box>
         </Button>
         <Menu
           id="basic-menu"
           anchorEl={anchorEl}
           open={open}
           onClose={handleClose}
           MenuListProps={{
             'aria-labelledby': 'basic-button',
           }}

           
         >
         <MenuItem onClick={handleClose} disableRipple>
         <EditIcon />
         Profile
       </MenuItem>
       <MenuItem onClick={handleClose} disableRipple>
         <NotificationsNoneIcon />
         Notification
       </MenuItem>
       <Divider sx={{ my: 0.5 }} />
       <MenuItem onClick={handleClose} disableRipple>
         <MailOutlineIcon />
         Message
       </MenuItem>
       <MenuItem onClick={handleClose} disableRipple>
         <MoreHorizIcon />
         More
       </MenuItem>
         </Menu>
         
           </Box>
          
           
           </Box>)
      }
        </Toolbar>
        </Box>
    </div>
  )
}

export default HeaderDash