import React from 'react'
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
import { useDispatch, useSelector } from "react-redux";
import {createUser} from "../Global/actions"
import { RiWindowLine } from 'react-icons/ri';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";




const useStyles = makeStyles((theme)=>({
    root:{
        width:"100%",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#1D5589",

        "@media (max-width: 800px)":{
         height:"100vh",
        
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
            height:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",

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
            height:'60%',
            width:"80%",
            backgroundColor:"white",
            borderRadius:"6px",
            display:"flex",
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
                marginBottom:"10px",
                
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
        "& .AdminCon": {
            width: "300px",
            height: "70px",
            marginBottom:"30px",
            backgroundColor: "#1D5589",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow:" rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",

            "@media (max-width: 800px)":{
                width:"250px",
                height:'60px',
               
            },


             '&:hover': {
                 
                 transition: "all 600ms ease-out",
                 transform:"scale(1.01)",

                "& .MuiTypography-root":{
                fontSize:"30px",
                fontWeight:"700",
                color: "white",
                transition: "all 500ms ease-out",
                
               
            //    "@media (max-width: 800px)":{
            //      fontSize:"65px",
            //     }
                 },
                 "& .iicon": {
                     color: 'white',
                     transition: "all 600ms ease-out",
                }
                
              },
            

             "& .MuiTypography-root":{
                fontSize:"25px",
                fontWeight:"600",
                 color: "#FFFFFF",
                letterSpacing:"3px",
               
        
              },
            
        }
        
    }
}))

function LogIn() {
    const classes = useStyles()
    const myNavigation = useNavigate()
    const [loading, setLoading] = React.useState(false);
    const [dataerror, setDataError] = React.useState("");
    const dispatch = useDispatch();
   

    const yupSchema = yup.object().shape({
        email: yup.string().email().required("email has to be filled"),
        password: yup.string().required("Please enter your preferred password"),
    });
    
    const {
        handleSubmit,
        reset,
        register,
        formState: { errors },
    } = useForm({ resolver: yupResolver(yupSchema) });
    
    const submit = handleSubmit(async (value) => {
        console.log(value);
        setLoading(true)
        const localURL = "https://caretagback.herokuapp.com";
        const url = `${localURL}/api/admin/signin`;
      
        await axios
            .post(url, value)
            .then((res) => {
                setLoading(false);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: res.data.message,
                    showConfirmButton: true,
                    button: "ok",
                }).then(() =>
                {
                    dispatch(createUser(res.data.data));
                    window.location.reload( myNavigation("/Dash"))
                  
                    
                });
            })
            .catch((err) =>
            {
                setLoading(true);
                if (err.response.status === 401) {
                    setLoading(false);
                    Swal.fire({
                        title: err.response.data.message,
                        text: "",
                        icon: "error",
                        button: "ok",
                    })
                   
					
                } else
                {
                    setLoading(false);
                    Swal.fire({
                        title: "Something went wrong",
                        text: "Check your internet connection",
                        icon: "error",
                        button: "ok",
                    })
                   
                }
            });
    });

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
                <Box className='formTitle'><Typography>Log In As</Typography></Box>
                            <Box className='formCom'>    
                                    <Link to="/login" style={{textDecoration:"none"}}>
                                    <Box className='AdminCon'>
                                            <Typography>Admin</Typography>
                                    </Box>
                                    </Link>
                               <Link to="/agentlogin" style={{textDecoration:"none"}}>
                                    <Box className='AdminCon'>
                                            <Typography>Agent</Typography>
                                    </Box>
                                </Link>
                 
                
                                </Box>
               

            </Box>
        </Box>
    </Box>
    {loading ? <Loading loading={loading} /> : null}
            </Box>
            </>
  )
}

export default LogIn