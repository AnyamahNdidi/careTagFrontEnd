import React,{useState,useContext,useEffect} from 'react'
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box,Menu, MenuItem, Button} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {UserContext} from "../GlobalContex/Globastate"
import GlobalButton from '../Theme/GlobalButton';
import {useNavigate} from "react-router-dom"
import pix from "../Header/img/3.png"
import { height } from '@mui/system';
import pixx from "./1.png"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AppsIcon from '@mui/icons-material/Apps';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import AddCardIcon from '@mui/icons-material/AddCard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Global/actions"
import { Link } from "react-router-dom";



const useStyles = makeStyles((theme)=>({
    root:{
        height:"100vh",
        width:"auto",
    
       

        "@media (max-width: 800px)":{
            display:"none",
        },

        "& .firtBox":{
            height:"100%",
            width:"250px",
            backgroundColor:"#223862",
            transition: "all 400ms ease-out",
            display:"flex",
            flexDirection:"column",
           
        },
        "& .SecondBox":{
            height:"100%",
            width:"75px",
            backgroundColor:"#223862",
            transition: "all 400ms ease-in",
            display:"flex",
            flexDirection:"column",
        },
        "& .imgSixe":{
            width:"70%",
            height:"90%",
          
            display:"flex",  
        },
        "& .imgHolder":{
            // backgroundColor:theme.palette.primary.main,
            width:"40%",
            height:"100%",
           

        },
        "& .namepro":{
            height:"100%",
            width:"60%",
            display:"flex",
            alignItems:"center",
           

            "& .MuiTypography-root":{
                fontSize:"30px",
                fontWeight:"700",
                color:"#A6C4E1",
                letterSpacing:"-3px",
                marginLeft:"-25px"
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }

        },
        "& .sideLog":{
            width:"100%",
            height:"60px",
            paddingTop:"20px",
           
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        },
        "& .dUserCon":{
            width:"100%",
            height:"200px",
           
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        },
        "& .dUserConData":{
            width:"80%",
            height:"90%",
         
            display:"flex",
            flexDirection:"column",
           
            alignItems:'center',
        },
        "& .imageBox":{
            width:"35%",
            height:"70%",
            borderRadius:"50%",
            boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",
          
           
        },
        "& .imageCon":{
            width:"100%",
            height:"100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
          
        },
        "& .nameCon":{
            width:"100%",
            height:"25px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
           
        },
        "& .contentCon":{
            width:"100%",
            height:"25px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
           

            "& .MuiTypography-root":{
                fontSize:"15px",
                fontWeight:"700",
                color:"white",
               
               
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }
        },
        "& .iconCon":{
            width:"100%",
            height:"30px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
           
        },
        "& .allCon":{
            width:"90%",
            height: "100%",
           
            paddingLeft:"25%",
           
            display:"flex",
           
            alignItems:'center',
        },
        "& .logCon": {
            marginLeft: "-5px",
            marginTop:"5px",
        },
        "& .SideMenu": {
            height: "350px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems:"center"
        },
        "& .AllMenu": {
            height: "350px",
            width: "95%",
         
          
        },
        "& .navMenu": {
            height: "45px",
            width: "100%",
           
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            borderRadius: "30px 0px 0px 30px",
            cursor: "pointer",
            marginBottom:"10px",

             '&:hover': {
                 background: "#74909d",
                 transition: "all 600ms ease-out",
                 transform:"scale(1.01)",

                "& .MuiTypography-root":{
                fontSize:"18px",
                fontWeight:"700",
                color: "white",
                marginTop: "-1px",
                marginLeft: "5px",
                transition: "all 600ms ease-out",
                textDecoration:"none",
               
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
                 },
                 "& .iicon": {
                     color: 'white',
                     transition: "all 600ms ease-out",
                }
                
              },
            
        },
        "& .bothHolder": {
            width: "85%",
            height: "100%",
            display:'flex',
            alignItems:"center",
        },
        "& .typeCon": {
            
            "& .MuiTypography-root":{
                fontSize:"13px",
                fontWeight:"200",
                color: "#eefbff",
                marginTop: "-1px",
                marginLeft:"5px",
               
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }
        },
        "& .iicon": {
            fontSize: "25px",
            color: "white",

            
        },
        "& .secondCon": {
            height: "50px",
            width: "100%",
          
            marginTop:"18px",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
        },
        "& .secondIcon": {
            height: "45px",
            width: "100%",
           
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
        },
        "& .secondImg": {
            height: "90%",
            width: "90%",  
        },
        "& .secondUser": {
            height: "45px",
            width: "60%",
            marginTop:"20px",
            
            
            
        }

    }
    
}))
function AgentSideBar ()
{
    const dtoggle = useSelector((state) => state.toggle);
    const dispatch = useDispatch();
     const myNavigation = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


  const classes = useStyles()
    const { user, setSelectedChat, chat, setChat,
        toggle,  overViewButton,allButton,addBtton,activeButton,customerButton } = useContext(UserContext)
    
 
    console.log(user)

    console.log(user)
  return (
    <Box className={classes.root}>

    {
        toggle ? (
            <Box className='firtBox'>
                <Box>
                   <Box className="sideLog">
                   <Box className='imgSixe'>
                   <div className='imgHolder'> 
                   <img src={pix} style={{width:"90%", height:"90%", objectFit:"contain"}}/>
                   </div>
                  
                   <div className='namepro'>
                   <Typography>careTag.</Typography>
                   </div>
                  </Box>
                   </Box>

                   <Box className='dUserCon'>
                        <Box className='dUserConData'>
                            <Box className='imageCon'>
                                <Box className='imageBox'><img   style={{width:"100%", height:"100%", borderRadius:"50%", objectFit:"cover"}} src={user?.avatar}/></Box>
                            </Box>



                            <Box className='nameCon'>

                                      <Box className='contentCon'><Typography>{user?.agentName}</Typography></Box>
                            </Box>


                            <Box className='iconCon'>
                                <Box className='allCon'>


                            <Box className='userCon' >
                                <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                              >
                              <SettingsIcon style={{fontSize:"20px", color:"white"}}/>
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

                        <Box className='logCon'>
                                <LogoutIcon style={{fontSize:"20px", color:"white"}}/>
                        </Box>

                                </Box>
                            </Box>
                        </Box>
                   </Box>

                          
                          <Box className='SideMenu'>
                              <Box className='AllMenu'>
                                  <Link to="/agent" style={{textDecoration:"none"}}>
                                    <Box className='navMenu' >
                                      <Box className="bothHolder">
                                          <Box className='navIcon'><AppsIcon className="iicon"/></Box>
                                          <Box className='typeCon'> <Typography>Overview</Typography></Box>
                                      </Box>
                                      </Box>
                                  </Link>

                                  <Link to="/customer" style={{textDecoration:"none"}}>
                                  <Box className='navMenu'  >
                                      <Box className="bothHolder">
                                          <Box className='navIcon'><AlignHorizontalLeftIcon  className="iicon"/></Box>
                                          <Box className='typeCon'> <Typography>Customer</Typography></Box>
                                      </Box>
                                      </Box>
                                  </Link>
                                  <Link to="/message" style={{textDecoration:"none"}}>
                                  <Box className='navMenu'     >
                                      <Box className="bothHolder">
                                          <Box className='navIcon'><AddCardIcon className="iicon"/></Box>
                                          <Box className='typeCon'> <Typography>Message</Typography></Box>
                                      </Box>
                                      </Box>
                                </Link>
                            
                              
                                  <Box className='navMenu'>
                                      <Box className="bothHolder" onClick={() => {
							
                                          dispatch(signOut())
                                          myNavigation("/login");
                                          window.reload()
                                          
                                
							}}>
                                          <Box className='navIcon'><LogoutIcon className="iicon"/></Box>
                                          <Box className='typeCon'> <Typography>Log Out</Typography></Box>
                                      </Box>
                                  </Box>
                              </Box>
                          </Box>
                </Box>
            </Box>
        ) : 
        (
                      <Box className='SecondBox'>
                          <Box>
                              <Box className='secondCon'>
                                  <Box className='secondImg'> <img src={pix} style={{width:"100%", height:"100%", objectFit:"contain"}}/></Box>
                              </Box>

                              <Box className='secondCon'>
                                  <Box className='secondUser'><img src={pixx} style={{width:"90%", height:"90%", borderRadius:"50%", objectFit:"contain"}}/></Box>
                              </Box>

                              <Box className='secondCon'>
                                  <Box className='secondUser'>
                                 <Box style={{marginLeft:"-14px", marginTop:"-20px"}} className='userCon' >
                                <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                              >
                              <MoreHorizIcon style={{fontSize:"20px", color:"white"}}/>
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
                              </Box>


                              
                              <Box className='secondConIcon'>
                                  <Box className='secondIcon'><AppsIcon className="iicon"/></Box>
                              </Box>
                              <Box className='secondConIcon'>
                                  <Box className='secondIcon'><AlignHorizontalLeftIcon className="iicon"/></Box>
                              </Box>
                              <Box className='secondConIcon'>
                                  <Box className='secondIcon'><AddCardIcon className="iicon"/></Box>
                              </Box>
                             
                          </Box>
                     </Box>
        )
    }
       
    </Box>
  )
}

export default AgentSideBar