import React from 'react'
import
    {
        Drawer, TextField, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton,
        Typography, Box, FormControl, InputLabel, OutlinedInput, InputAdornment,FilledInput
    } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import GlobalButton from '../Theme/GlobalButton';
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import HeaderDash from "./HeaderDash"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {UserContext} from "../GlobalContex/Globastate"
import Swal from "sweetalert2";
import axios from "axios";
import Autocomplete from "react-google-autocomplete";
import ViewAdd from './ViewAddRecent';
import swal from "sweetalert";
import pixx from "./1.png"


const useStyles = makeStyles((theme)=>({
    root:{
        height:"100vh",
        flex:"1",
       
        display:"flex",
        flexDirection: "column",
        
        "& .allContent": {
            width: "100%",
            height: "100vh",
          display: "flex",
            
            flexDirection: "column",
            
             "@media (max-width: 800px)":{
                 justifyContent: "center",
                 alignItems:"center"
            },
        },
        "& .headerCon": {
            height: "60px",
            width: "100%",
           
            display: "flex",
            justifyContent: "Center",
            alignItems:"center",
          borderBottom: "1px solid #c0c0c0",
         
           
            

             "@media (max-width: 800px)":{
               width: "90%",
              
            },
            
        },
        "& .agentForm": {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent:"center",
           
        },
        "& .addCon": {
            height: "auto",
            width: "450px",
            display: "flex",
            flexDirection: "column",
          alignItems: "center",
            flexDirection:"column",
            paddingTop: "30px",
            paddingBottom: "20px",
            
          
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",

            
            "@media (max-width: 800px)":{
                width:"90%",
            },
            
    
        },
        "& .typeCon": {
            width: "95%",
            height: "100%",
            display: "flex",
          alignItems: "center",
          justifyContent:"center",
          
            
        
             
          
            
               "& .MuiTypography-root":{
                fontSize:"30px",
                fontWeight:"300",
                color:"grey",
                letterSpacing:"-1px",
               
               "@media (max-width: 800px)":{
                 fontSize: "15px",
                 letterSpacing:"1px",
                }
              }
        },
          "& .dtype":{

            "& .MuiTypography-root":{
                fontSize:"10px",
                fontWeight:"600",
                  color: "red",
            
               
        
              },
        },
        "& .textConn": {
            width: "88.7%",
            height: "50px",
            backgroundColor: "#F0F0F0",
            borderRadius: "5px 5px 0px 0px",
            OutlinedInput: "none",
            outline: "none",
            borderTopStyle: "hidden",
            borderRightStyle: "hidden",
            borderLeftStyle: "hidden",
            borderBottomStyle: "#616161",
            paddingLeft:"10px",

            "& .textConn:focus": {
                 backgroundColor:"#E8F0FE"
            }
    },
        "& .typeCon2": {
          display: "flex",
          width: "100&",
          justifyContent: "center",
          alignItems:"center",
        
        

           "@media (max-width: 800px)":{
             width: "80%",
             display: "flex",
             
             flexDirection: "column",
             paddingRight: "0px",
             
            alignItems:"flex-end",
            },
                
    },
        "& .codeCon": {
          
          fontSize:"30px",
         
         
           "& .MuiTypography-root":{
            
             fontSize:"20px",
             fontWeight:"600",
        
             "@media (max-width: 800px)":{
                 fontSize: "15px",
                
                }
              },
    },
    "& .ddd": {
      marginTop: "3px",
      width: "auto",
   
       "& .MuiTypography-root":{
            
             fontSize:"15px",
         fontWeight: "600",
             
         
               "@media (max-width: 800px)":{
                 fontSize: "11px",
                
                }
        
              },
    },
    "& .circleImageCon": {
      height: "auto",
      width: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom:"10px",
      
    },
    "& .imageddd": {
      height: "150px",
      width: "150px",
      backgroundColor: "green",
      borderRadius:"50%"
    },
    "& .nameCon": {
      width: "100%",
      height: "25px",
    
      display: "flex",
      justifyContent: "center",
      alignItems:"center"
      
    },
    "& .dnameCon": {
      
      
           "& .MuiTypography-root":{
            
             fontSize:"20px",
             fontWeight: "600",
             color:"#223862",
        
             "@media (max-width: 800px)":{
                 fontSize: "15px",
                
                }
              },
    },
    "& .dnameConAgent": {
      
      
           "& .MuiTypography-root":{
            
             fontSize:"15px",
       
             color:"grey",
        
             "@media (max-width: 800px)":{
                 fontSize: "15px",
                
                }
              },
    },
    "& .dloginCon": {
      width: "aut0",
      height: "25px",
      
      display: "flex",
    },
    "& .emailCon": {
      
         "& .MuiTypography-root":{
            
             fontSize:"15px",
             fontWeight: "600",
             color:"#223862",
        
             "@media (max-width: 800px)":{
                 fontSize: "15px",
                
                }
              },
    },

    "& .creCon": {
      marginTop: "-2px",
      marginLeft:"2px",
        "& .MuiTypography-root":{
            
             fontSize:"17px",
             letterSpacing: "4px",
             fontWeight:"600",
             color:"grey",
        
             "@media (max-width: 800px)":{
                 fontSize: "15px",
                
                }
              },
    },

    "& .dbuttonAll": {
      width: "100%",
      height: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
    },
    "& .viewCon": {
      width: "auto",
      height: "auto",
      backgroundColor: "#223862",
      display: "flex",
      justifyContent: 'center',
      alignItems: "center",
      padding: "10px",
      borderRadius:"5px",
      
        "& .MuiTypography-root":{
            
             fontSize:"17px",
             letterSpacing: "4px",
             fontWeight:"600",
             color:"white",
        
             "@media (max-width: 800px)":{
                 fontSize: "15px",
                
                }
              },
    }

    
    }
}))
function ViewAddRecent ()
{

  const [location, setLocations] = React.useState("")
  	const hist = useNavigate();
   const { user, setSelectedChat, chat, setChat,
    toggle, overViewButton, allButton, addBtton, activeButton, customerButton } = React.useContext(UserContext)
   const duser = useSelector((state) => state?.persistedReducer?.user)
  console.log("i want to see this blaaa", duser._id)
  const myId = duser._id
  console.log(myId)
  
 const [data, setData] = React.useState([])
     const getinData = async () =>
  {
    try
    {
      await axios.get(`https://caretagback.herokuapp.com/api/admin/${myId}/agent/one/agent`).then((result) =>
      {
        console.log("oh my gogis",result)
        setData(result?.data?.data?.agent)
        console.log("return my data one agent please", data)
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
  
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <HeaderDash/>
      
          <Box className='allContent'>
              <Box className='headerCon'>
          <Box className='typeCon'>
            <Typography>Agent Recent Created</Typography>
          </Box>
            
        </Box>

        {
          data.map((props) => (
                 <Box className='agentForm' >
                  <Box className='addCon' >
            <Box className='circleImageCon'>
              <Box className='imageddd'>
                <img src={pixx} style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"50%"}}/>
              </Box>
            </Box>    
            <Box  className='nameCon'>
                  <Box className='dnameCon'><Typography>{props.agentName }</Typography></Box>
            </Box>    
            <Box  className='nameCon'>
              <Box className='dnameConAgent'><Typography>Agent Login Detail</Typography></Box>
            </Box>    
            <Box className="dloginCon">
              <Box className='emailCon'><Typography>Email : </Typography></Box>
                  <Box className='creCon'><Typography> {props.email }</Typography></Box>
              
            </Box>    
            <Box className="dloginCon">
              <Box className='emailCon'><Typography>password : </Typography></Box>
              <Box className=''><Typography> mannn23332</Typography></Box>
              
            </Box>   
            <Box className="dloginCon">
              <Box className='emailCon'><Typography>Location : </Typography></Box>
                  <Box className=''><Typography>{props.location }</Typography></Box>
              
            </Box>   
            
            <Link to="/allagent" style={{textDecoration:"none"}}>
            <Box className='dbuttonAll'>
              <Box  className='viewCon'> <Typography>View All Agent</Typography></Box>
              </Box>
            </Link>
                  </Box>
              </Box>
          ))
        }
        
        
         
          </Box>
              
    </Box>

  )
}

export default ViewAddRecent