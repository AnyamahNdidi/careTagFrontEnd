import React,{ useEffect, useState } from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {AppBar, Toolbar, Tabs, Tab,Typography,useMediaQuery, useTheme, Box,TextField, Button} from "@mui/material"
// import pic from "./2.png"
import GlobalButton from '../Theme/GlobalButton';
import { padding } from '@mui/system';
import {useNavigate,useParams} from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "./Loading"
import { MdOutlineMarkEmailRead } from 'react-icons/md';


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
         paddingBottom:"30px",
        
        },
        
        
        "& .allCon":{
            width:"75%",
            height:"80%",
            marginTop:"80px",
            display:"flex",
           
            justifyContent:"center",
            alignItems:"center",


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
            height:'290px',
            width:"40%",
            backgroundColor:"white",
            borderRadius:"6px",
            display:"flex",
            paddingTop:"12px",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
         
        

            "@media (max-width: 800px)":{
                width:"100%",
                height:'300px',
               
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
            marginTop:"-20px",
     
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
        "& .navCon":{
            width:"200px",
            height:"50px",
            backgroundColor:"#223862",
            color:"white",
            cursor:"pointer",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"6px",
            marginTop:"15px",
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
        "& .dtype":{

            "& .MuiTypography-root":{
                fontSize:"10px",
                fontWeight:"600",
                color:"red",
               
        
              },
        }
        
    }
}))


function Verification() {
    const classes = useStyles()
    const myNavigation = useNavigate()

    const {id, token} = useParams()
    const [loading, setLoading] = React.useState(false);

	const onSubmit = async () => {
	
        console.log(id)
        console.log(token)
		const online = "https://caretagback.herokuapp.com";

		const url = `${online}/api/admin/${id}/${token}`;
        setLoading(true)
		const res = await axios.get(url).then((res) => {
			if (res) {
		  console.log("show", res)
         
        setLoading(false);
          myNavigation("/login");
				window.location.reload();
			} 
		});

	

		
        // window.location.reload()
	};

    
    
    

      
  return (
    <Box className={classes.root}>
    <Box className='allCon'>
      
      
            <Box className="cardSign">
            <Box> <MdOutlineMarkEmailRead  style={{fontSize:"100px" , color:"#223862"}}/></Box>
            <Box>Verification Successfull</Box>
            <Box className='navCon'  
            onClick={()=>{
              console.log(id)
              console.log(token)
              onSubmit()
             }}
            >
            <Typography>
            
            Click To Proceed
            </Typography>
            </Box>
           
               
              
            
            </Box>
     
    </Box>
  
    {loading ? <Loading loading={loading} /> : null}
    </Box>
  )
}

export default Verification