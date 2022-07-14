import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import {UserContext} from "../../GlobalContex/Globastate"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton, Typography, Box,Menu, MenuItem, Button} from "@mui/material"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./Table.css"
import pix from "./1.png"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AppsIcon from '@mui/icons-material/Apps';

const useStyles = makeStyles((theme)=>({
    root:{
        width: "100%",
        height: "300px",
        
       
        
       
        

          "@media (max-width: 800px)":{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems:"center",
    },
    
    "& .holderCon": {
      width: "100%",
      height: "100%",
      backgroundColor: "purple",
      overflowX:"scroll",
    
     
      
         
          "@media (max-width: 800px)":{
            width: "100%",
            
        
    },
     
     
    },
    
    "& .headerTable": {
      display: "flex",
      width: "100%",
      height:"50px",
      backgroundColor: "pink",
     
      
      
      
          "@media (max-width: 800px)":{
              width: "100%",
        
    },
    },
    "& .nameCon": {
      width: "250px",
      height: "100%",
      backgroundColor:"blue"
    },
    "& .statusCon":{
      width: "100px",
      height: "100%",
      backgroundColor:"yellow"
    },
    "& .locationCon": {
      width: "100px",
      height: "100%",
      backgroundColor:"red"
    }

      
    }
}))

export default function TableCon ()
{const { user, setSelectedChat, chat, setChat,
  toggle, overViewButton, allButton, addBtton, activeButton, customerButton } = React.useContext(UserContext)
  const duser = useSelector((state) => state?.persistedReducer?.user)
  console.log("i want to see this blaaa", duser._id)
  const myId = duser._id
  console.log(myId)

   const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  const classes = useStyles()
  
  const [data, setData] = React.useState([])

  const getinData = async () =>
  {
    try
    {
      await axios.get(`https://caretagback.herokuapp.com/api/admin/${myId}/agent/all`).then((result) =>
      {
        setData(result?.data?.data?.agent)
        console.log("return my data please", data)
      }).catch((error) =>
      {
        console.log("there is error in this ", error)
      })
    } catch (erro)
    {
      console.log("error in getting", erro)
    }
  }


  
  
 

  React.useEffect(() =>
  {
    getinData()
  
  },[])
 
   return (
     <>
      <div style={{overflowX: "auto"}}>
  <table>
    <tr style={{
							backgroundColor: "#223862",
							height: "50px",
							paddingRight: "20px",
             paddingLeft: "20px",
             color:"#EDF3F9"
              
						}}>
      <th style={{
								height: "50px",
               paddingRight: "20px",
               width: "auto",
                width:"250px",
								paddingLeft: "20px",
							}}>All Agent</th>
      <th>Status</th>
             <th
             style={{
								height: "50px",
               paddingRight: "20px",
               width: "auto",
                width:"200px",
							
							}}
             >Location</th>
      <th style={{
								height: "50px",
               paddingRight: "20px",
               width: "auto",
                width:"200px",
						
							}}>User Login</th>
             <th style={{
        width:"100px",
      }}>Actions</th>
    
    </tr>
           {
             data?.map((props) => (
                <tr>
             <td style={{display:"flex", width:"200px",}}  >
              
               <div style={{
                 width: "50px",
                 
                 height: "50px",
                 borderRadius:"50%"
               }}>
                 <img src={pix} style={{width:"100%", height:"100%", borderRadius:"50%", objectFit:"cover"}}/>
               </div>
               <div
                 style={{
                   width: "auto",
                   height: "50px",
                   marginTop:"5px",
                   display: "flex",
                   flexDirection: "column",
                   marginLeft:"5px"
                 }}
               >
                 <div
                   style={{
                     fontWeight: "600",
                     color:"#223862"
                   }}
                     >{props.agentName }</div>
                 <div
                  style={{
                     fontSize:"13px",
                     color:"#223862"
                   }}
                 >@dev_didi</div>
               </div>
              
             </td>
             <td>
               <div style={{display:"flex", width:"150px"}}>
                 <div style={{
                   width: "10px",
                   height: "10px",
                   background: "green",
                   borderRadius: "50%",
                   marginTop: "7px",
                   marginRight:"5px"
                  }}></div>
                 <div
                   style={{display:"flex", width:"100px", color:"#223862", fontWeight:"500"}}
                 >Active</div>
               </div>
             </td>
             <td>
                   <div style={{ display: "flex", width: "100px", color: "#223862", fontWeight: "500" }}>{ props.location}</div>
             </td>

                 <td>  <div style={{ display: "flex", color: "#223862", fontWeight: "500" }}>{ props.email}</div></td>
             <td>
               <div style={{ display: "flex", width: "50px" }}>
                          <Box className='userCon' >
                                <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                              >
                              <SettingsIcon style={{fontSize:"20px", color:"#223862"}}/>
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
                              view
                                 </MenuItem>
                                 <MenuItem onClick={handleClose} disableRipple>
                              <NotificationsNoneIcon />
                              Delete
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
               </div>
             </td>
    
    </tr>
             ))
   }
   
  </table>
</div>
     </>
  );
}