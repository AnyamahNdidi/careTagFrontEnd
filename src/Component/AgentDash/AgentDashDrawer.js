import React,{useContext} from 'react'
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box,Menu, MenuItem, Button} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import {UserContext} from "../GlobalContex/Globastate"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import pix from "../Header/img/3.png"
import GlobalButton from '../Theme/GlobalButton';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
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
import pixx from "./1.png"
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Global/actions"


const useStyles = makeStyles((theme)=>({
    root:{
        height:"75px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
        "& .drawerList":{
            backgroundColor:"#223862",
            height:"100%",
           
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
            
            display: "flex",  
         
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
            alignItems: "center",
            

            "& .MuiTypography-root":{
                fontSize:"30px",
                fontWeight:"300",
                color:"white",
                letterSpacing:"-3px",
                marginLeft:"-16px"
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }

        },
        "& .textmanin":{
            display:"flex",
           
         
            width: "100%",
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
          

          
        },
        "& .holderConn":{
            width:"100%",
            height:"50px",
            borderBottom:"2px solid white",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
           "& .iconCon":{
            width:"200%",
            height:"30px",
            display:"flex",
            marginTop:"-20px",
            alignItems: "center",
           
           
        },
            "& .allCon":{
            width:"90%",
            height: "100%",
           
          
           
            display:"flex",
           
            alignItems:'center',
        },
        "& .imageCon":{
            width:"150%",
            height:"80px",
            display:"flex",
          alignItems: "center",
          
  
            alignItems: "center",
          
         
          
        },
         "& .imageBox":{
            width:"33%",
            height:"70%",
            borderRadius:"50%",
             boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
             backgroundColor: "green", 
             marginLeft:"28px",
        },
          "& .nameCon":{
            width:"100%",
            height:"25px",
            display:"flex",
            justifyContent:"center",
              alignItems: "center",
            marginTop:"-25px",
            
           
        },
        "& .contentCon":{
            width:"100%",
            height:"25px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
           

            "& .MuiTypography-root":{
                fontSize:"15px",
                fontWeight:"200",
                color:"#F5F6F6",
               
               
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }
        },
         "& .bothHolder": {
            width: "85%",
            height: "100%",
            display: 'flex',
             justifyContent: "center",
            marginTop:"-30px",
            
        },
         "& .iicon": {
            fontSize: "25px",
            color: "white",

            
        },
        "& .typeCon": {
            
            "& .MuiTypography-root":{
                fontSize:"15px",
                fontWeight:"200",
                color: "#eefbff",
                marginTop: "2px",
                marginLeft:"5px",
               
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
              }
        },
           "& .navMenu": {
            height: "30px",
            width: "200%",
           
            marginLeft:"-30px",
            display: "flex",
           
            alignItems: "center",
            borderRadius: "30px 0px 0px 30px",
            cursor: "pointer",
         

             '&:hover': {
                
               

                "& .MuiTypography-root":{
                fontSize:"18px",
             
                color: "white",
               
                
               
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

    }
    
}))

function AgentDashDrawer() {
    const dispatch = useDispatch();
  const { user, setSelectedChat, chat, setChat, toggle, setToggle, handleToggle,
  overViewButton,allButton,addBtton,activeButton,customerButton
  } = useContext(UserContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
 
    


  const [openDrawer, setOpenDrawer] = React.useState(false)
  const classes = useStyles()
  const myNavigation = useNavigate()
  return (
      < React.Fragment>
           <Drawer  className={classes.root} open={openDrawer} anchor="left" onClose={()=> setOpenDrawer(false)}>
         
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
                  
                     
                <ListItemButton >
                     <ListItemIcon className='textAligntext'>
                          <ListItemText className='textmanin'>
                            <Box className='imageCon'>
                  <Box className='imageBox'>
                    {
                      user ? (<img style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} src={user.avatar} />) :
                        (  <img style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} src={pixx} />)
                    }
                  
                  </Box>
                            </Box>

                         </ListItemText>
                     </ListItemIcon>
                  </ListItemButton>
                     
                <ListItemButton >
                     <ListItemIcon className='textAligntext'>
                          <ListItemText className='textmanin'>
                           <Box className='nameCon'>
                  <Box className='contentCon'>
                    <Typography>
                      {
                        user ? (<div>{user.organizationName}</div>): (<div>company namem</div>)
                      }
                    
                  </Typography></Box>
                            </Box>

                         </ListItemText>
                     </ListItemIcon>
                  </ListItemButton>
                  

          <ListItemButton  >
            <ListItemIcon className='textAligntext'>
                          <ListItemText className='textmanin'>
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
                              <SettingsIcon style={{fontSize:"20px", color:"#F5F6F6"}}/>
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
                              
             
              
                           </ListItemText>
                      </ListItemIcon>
                      
                  </ListItemButton>
                  <Link to="/">
          <ListItemButton onClick={() =>{
            setOpenDrawer(false)
            
          }
            }
          
          >
                     <ListItemIcon className='textAligntext'>
                     <ListItemText className='textmanin'>
                                 <Box className='navMenu'>
                                      <Box className="bothHolder">
                                          <Box className='navIcon'><AppsIcon className="iicon"/></Box>
                                          <Box className='typeCon'> <Typography>Overview</Typography></Box>
                                      </Box>
                                  </Box>
              
                   </ListItemText>
                     </ListItemIcon>
            </ListItemButton>
            </Link>
                  
          <Link to="/customer">
          <ListItemButton
             onClick={() =>{
            setOpenDrawer(false)
            
          }
            }
          >
            <ListItemIcon className='textAligntext'>
                          <ListItemText className='textmanin' style={{marginTop:"-10px"}}>
                                 <Box className='navMenu'>
                                      <Box className="bothHolder">
                                          <Box className='navIcon'><AlignHorizontalLeftIcon className="iicon"/></Box>
                                          <Box className='typeCon'> <Typography>Customer</Typography></Box>
                                      </Box>
                                  </Box>
                          </ListItemText>
                           </ListItemIcon>
            </ListItemButton>
            </Link>
           <Link to="/message">
          <ListItemButton  onClick={() =>{
            setOpenDrawer(false)
           
          }
            }>
            <ListItemIcon className='textAligntext'>
                          <ListItemText className='textmanin'  style={{marginTop:"-10px"}}>
                                <Box className='navMenu'>
                                      <Box className="bothHolder">
                                          <Box className='navIcon'><AddCardIcon className="iicon"/></Box>
                                          <Box className='typeCon'> <Typography>Message</Typography></Box>
                                      </Box>
                                  </Box>
                            
                          </ListItemText>
            </ListItemIcon>
            </ListItemButton>
            </Link>
                  
         
      

          <ListItemButton onClick={()=> {
            myNavigation("/login")
            setOpenDrawer(false)
          } } 
          
          >
            <ListItemIcon className='textAligntext' style={{ marginTop: "-40px" }}
              onClick={() =>
              {
               dispatch(signOut())
              myNavigation("/login");
                                         
            }}
            >
          <GlobalButton> Log Out </GlobalButton>
          </ListItemIcon>
          </ListItemButton>

        </List>
        </Drawer>
        <IconButton sx= {{ color:"#314A72", }} onClick={()=>setOpenDrawer(!openDrawer)}>
           <MenuIcon/>
        </IconButton>
      </React.Fragment>
 
   
  )
}

export default AgentDashDrawer