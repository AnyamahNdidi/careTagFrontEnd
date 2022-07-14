import React from 'react'
import
    {
        Drawer, TextField, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton,
        Typography, Box, FormControl, InputLabel, OutlinedInput, InputAdornment,FilledInput
    } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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
import Loading from "../Auth/Loading"


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
            justifyContent: "space-between",
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
          paddingLeft:"20px",
            
        
             
          
            
               "& .MuiTypography-root":{
                fontSize:"30px",
                fontWeight:"300",
                color:"grey",
                letterSpacing:"-3px",
               
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
          width: "300px",
          paddingRight: "35px",
        

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
        }
    }
}))
function AddAgent ()
{

  const [location, setLocations] = React.useState("")
  const hist = useNavigate();
  const [loading, setLoading] = React.useState(false);
   const { user, setSelectedChat, chat, setChat,
        toggle,  overViewButton,allButton,addBtton,activeButton,customerButton } =React.useContext(UserContext)
  

    const userModel = yup.object().shape({
        agentName:yup.string().required("field must not be empty"),
        organizationCode: yup.string().required("field must not be empty"),
       
        password:yup.string().required("password needed").min(6),
        confirmpassword:yup.string().oneOf([yup.ref('password'), null])
      })
    
    
    
      const {register, handleSubmit, formState:{errors}} = useForm({
        resolver : yupResolver(userModel)
      })
  

          const submit = handleSubmit(async (value)=>{
          try{
            console.log(value)
             setLoading(true)
              const { agentName, organizationCode, password } = value
              console.log(location)
              await axios.post("https://caretagback.herokuapp.com/api/agent/regagent", { agentName, organizationCode, password,location })
              .then((response)=>{
                setLoading(false);
                Swal.fire({
                    title: " Success",
                    text: "Agent Created  Successfully",
                    icon: "success",
                    button: "ok", 
                 
                })
                  .then((value) => {
                   
                       window.location.reload( hist("/recent"))
                  
						// window.location.replace('/dashboard')
					
					});;
             
              
               
            })
                  .catch((error) =>
                  {
                if (error.response.status === 401 || 400) {
                   
                    Swal.fire({
                        title: error.response.data.message,
                        text: "",
                        icon: "error",
                        button: "ok",
                    })
                   
					
                }
              
                console.log(error)
            });
          }catch(error){
            console.log("error happwn when submitting", error)
          }
      })


      const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <HeaderDash/>
      
          <Box className='allContent'>
              <Box className='headerCon'>
                 <Box className='typeCon'><Typography>Create An Agent</Typography>
          </Box>
             <Box className='typeCon2'>
            <Box className='ddd'> <Typography>Orgainaztion Code:</Typography></Box>
            <Box className='codeCon'> <Typography>{user?.organizationCode}</Typography></Box>
           
          </Box>
        </Box>
        
              <Box className='agentForm' >
                  <form className='addCon'
                  
                        onSubmit={(e)=>{
                          e.preventDefault();
                          submit()
                          
                         
                  
                } }
                  >
                    
                      
                      <TextField sx={{ m: 1, width: '90%' }}
                          id="filled-basic"
                          label="Orgainaztion Code"
                          variant="filled"
                           {...register('organizationCode')}
                      />
                      
                       <Box className='dtype'><Typography>{errors.organizationCode?.message}</Typography></Box>
                        <TextField sx={{ m: 1, width: '90%' }}
                          id="filled-basic"
                          label="Full Name"
                          variant="filled"
                           {...register('agentName')}
                      />
                        <Autocomplete
											aria-required
											className='textConn'
											apiKey='AIzaSyBIe8lcH1rTX_sBfYeopfTGOjudCxQoPGo'
											onPlaceSelected={(place) => {
												console.log("hdshhfjjdf", place?.formatted_address);
                                                setLocations(place?.formatted_address);
                                                
											}}
										/>
                            
                               <FormControl sx={{ m: 1,  width: '90%' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
     
                               {...register('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
                      </FormControl>
                      <Box className='dtype'><Typography>{errors.password?.message}</Typography></Box>
                      
      <FormControl sx={{ m: 1, width: '90%' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
     
                              {...register('confirmpassword')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
                      </FormControl>
                      <Box className='dtype'><Typography>{errors.confirmpassword && 'password didnt match'}</Typography></Box>
                      

          

                      <Box>
                          <GlobalButton> Create</GlobalButton>
                      </Box>

                     
                      
                  </form>
              </Box>
          </Box>
                  {loading ? <Loading loading={loading} /> : null}
    </Box>

  )
}

export default AddAgent