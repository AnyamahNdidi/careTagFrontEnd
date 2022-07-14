import React,{ useEffect, useState } from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import
    {
        AppBar, Toolbar, Tabs, Tab, Typography, useMediaQuery, useTheme, Box, TextField, Button,
        FilledInput,InputAdornment,IconButton,FormControl,InputLabel
    } from "@mui/material"
// import pic from "./2.png"
import GlobalButton from '../Theme/GlobalButton';
import { padding } from '@mui/system';
import {useNavigate} from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "./Loading"
import Header from "../Header/HeaderCom"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const useStyles = makeStyles((theme)=>({
    root:{
        width:"100%",
     
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    backgroundColor: "#1D5589",
        

        "@media (max-width: 800px)":{
         height:"100%",
          paddingBottom: "30px",
        
         
        
        },
        
        
        "& .allCon":{
            width:"75%",
            height:"80%",
           
            display:"flex",
            flexWrap:"wrap",

            "@media (max-width: 800px)":{
                width:"90%",
                height:"auto",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            },
        },
        "& .box1":{
            width:"50%",
            height:"75vh",
            display:"flex",
            justifyContent:"center",
          alignItems: "center",
           

            "@media (max-width: 800px)":{
                display:"none",
            },
        },
        "& .box2":{
            width:"50%",
            height:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",

            "@media (max-width: 800px)":{
                width:"100%",
                height:"auto"
               
            },
           
        },
        "& .textCon":{
            height:"auto",

            "& .MuiTypography-root":{
                fontSize:"30px",
                fontWeight:"500",
                color:"#E7FBFF",
                lineHeight:"45px",
             
                marginTop:"10px",
                marginBottom:"10px",
        
              },
        },
        "& .cardSign":{
            height:'auto',
            width:"80%",
            backgroundColor:"white",
            borderRadius:"6px",
            display:"flex",
            paddingTop:"10px",
            justifyContent:"center",
            flexDirection:"column",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
         
        

            "@media (max-width: 800px)":{
                width:"100%",
                height:'auto',
               
            },
        },
        "& .formTitle":{
            height:"50px",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",

            '& .MuiTypography-root':{
               
                fontSize:"21px",
                fontWeight:"600",
                color:theme.typography.color, 
            }

          
        },
        "& .formCom":{
            width:"100%",
            height:"auto",
            borderRadius:"0px 0px 6px 6px",
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
            

            "@media (max-width: 800px)":{
                width:"100%",
                height:"auto"
               
            },
           


        },
        "& .fielText":{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",

            '& .MuiTextField-root':{
                width:"90%",
                marginBottom:"7px",
                
            }

        },
        "& .dbut":{
            
     
        },
        "& .alCon":{
            width:"100%",
            height:"50px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            
           
        },
        "& .alCondata":{
            display:"flex"
        },
        "& .conLog":{

            cursor:"pointer",
            
            "& .MuiTypography-root":{
                fontSize:"15px",
                fontWeight:"600",
                color:"red",
               
        
              },
        },
        "& .alreadyCon":{

            fontSize:"20px",
            fontWeight:"500",
            color:theme.typography.color,
            lineHeight:"40px",
         
        },
        "& .dtype":{

            "& .MuiTypography-root":{
                fontSize:"10px",
                fontWeight:"600",
                color:"red",
               
        
              },
        }
        
    }
}))


function SignUp() {
    const classes = useStyles()
    const myNavigation = useNavigate()
    const [loading, setLoading] = React.useState(false);

    const userModel = yup.object().shape({
        fullName:yup.string().required("field must not be empty"),
        organizationName:yup.string().required("field must not be empty"),
        email:yup.string().email().required("please put in your email"),
        password:yup.string().required("password needed").min(6),
        confirmpassword:yup.string().oneOf([yup.ref('password'), null])
      })
    
    
    
      const {register, handleSubmit, formState:{errors}} = useForm({
        resolver : yupResolver(userModel)
      })

      const toggleLoading = () => {
		setLoading(true);
	};

      const submit = handleSubmit(async (value)=>{
          try{
            console.log(value)
            const {fullName, organizationName, email, password}  = value
           
            setLoading(true)
            await axios.post("https://caretagback.herokuapp.com/api/admin", 
            {fullName, organizationName, email, password}).then((response)=>{
               
                Swal.fire({
                    title: " Success",
                    text: "A message has been sent to your email address to confirm your account",
                    icon: "success",
                });
                setLoading(false);
                myNavigation("/")
            })
            .catch((error) => {
                if (error.response.status === 401 || 400) {
                    setLoading(false);
                    Swal.fire({
                        title: error.response.data.message,
                        text: "",
                        icon: "error",
                        button: "ok",
                    })
                   
					
                }
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

      
    return (
        <>

    <Box className={classes.root}>
    <Box className='allCon'>
        <Box className="box1">
            <Box className='textCon'>
            <Typography>Peer To Peer Support App (Register Your Organization And Assign Your Agent).</Typography>
            </Box>
        </Box>
        <Box className="box2">
            <Box className="cardSign">
                <Box className='formTitle'><Typography>Create Account</Typography></Box>
                <form className='formCom' 
                
                onSubmit={(e)=>{
                    e.preventDefault();
                    submit()
                  
                } }>
                  <Box className='fielText'>
                    <TextField id="outlined-basic" className='dfield' label="Full Name" 
                    variant="filled"
                    {...register('fullName')}
                    />
                  </Box>
                  <Box className='dtype'><Typography>{errors.fullName?.message}</Typography></Box>

                  <Box className='fielText'>
                    <TextField id="outlined-basic" label="Organization's Name" 
                    variant="filled"
                                        {...register('organizationName')}
                                        inputProps={{
      style: {
        height:"20px",
        
      },
  }}
                     />
                  </Box>
                  <Box className='dtype'><Typography>{errors.organizationName?.message}</Typography></Box>

                  <Box className='fielText'>
                    <TextField id="outlined-basic" label="E-mail" 
                    variant="filled"
                    {...register('email')}
                    />
                  </Box>
                  <Box className='dtype'><Typography>{errors.email?.message}</Typography></Box>

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
                  
                  <Box className="dbut">
                    <GlobalButton>Register</GlobalButton>
                  </Box>
                
                </form>
                <Box className='alCon'>
                    <Box className='alCondata'>
                        <Box className="alreadyCon"> <Typography>Already Have An Account,</Typography></Box>
                        <Box className='conLog'
                        onClick={()=>{
                            myNavigation("/tworoute")
                          }}
                        ><Typography>Log In</Typography></Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    </Box>
    {loading ? <Loading loading={loading} /> : null}
    
            </Box>
            </>
  )
}

export default SignUp