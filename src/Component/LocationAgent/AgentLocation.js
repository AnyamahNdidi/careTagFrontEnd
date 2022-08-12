import React,{useContext} from 'react'
import {AppBar, Toolbar, Tabs, Tab,Typography,useMediaQuery, useTheme, Box,Button} from "@mui/material"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import GlobalButton from "../Theme/GlobalButton"
import { display, flexbox, width } from '@mui/system';
import pic from "./1.png"
import axios from "axios"
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { UserContext } from "../GlobalContex/Globastate"
import Loading from "../Auth/Loading"
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom"



const useStyles = makeStyles((theme)=>({
    root:{
        height: "100%",
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        backgroundColor:"#a6c4e1",

        "@media (max-width: 800px)":{
            height:"100%",
         
           
       },

      "& .HolderCon":{
            width:"75%",
            height:"100%",
            display:"flex",
            flexWrap:"wrap",

             "@media (max-width: 800px)":{
                 width: "100%",
               
                 flexDirection:"column-reverse"
        }
      },
      "& .box1":{
        width:"50%",
       
        height:"600px",
        display:"flex",

        alignItems:"center",
          justifyContent: "center",
       

        "@media (max-width: 800px)":{
            width:"100%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            height:"auto",
            alignItems:"center",
       }
      },
      "& .box2":{
        width:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
          height: "50&",
      

        "@media (max-width: 800px)":{
            width:"100%",
            
           
       }
      },
      "& .conDiv":{
          width:"95%",
          height: "auto",
          flexWrap:"wrap",
          display: "flex",
          
          justifyContent: "space-between",
         alignItems:"center",
       
         
        "@media (max-width: 800px)":{
             justifyContent: "center",
           
       }


      },

      "& .textBox":{
        height:"50px",
        width:"200px",
       
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"25px",
        borderRadius:"5px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        cursor:"pointer",

        "& .MuiTypography-root":{
            fontSize:"20px",
            fontWeight:"500",
            color:"white",
            lineHeight:"40px"
          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
        },
      
        "& .dbutton": {
          
             "& .MuiTypography-root":{
            fontSize:"15px",
            fontWeight:"500",
            color:"white",
            lineHeight:"40px"
          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          } 
      },

      "& .box2Image":{
        height:"70%",
        width:"100%",
        
        },
        "& .myButton": {
             height:"55px",
        width:"200px",
        backgroundColor:"#223862",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"10px",
        borderRadius:"5px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        cursor:"pointer",

          
             "& .MuiTypography-root":{
            fontSize:"10px",
            fontWeight:"600",
            color:"pink",
            lineHeight:"40px"
          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
        },
        "& .selectionCon": {
            width: "280px",
            backgroundColor: "white",
            borderRadius: "5px",
            marginTop:"10px"
        }


    }
    
}))

function AgentLocation() {
  const classes = useStyles()
   const myNavigation = useNavigate()
    const [dataSearch, setDataSearch] = React.useState("")
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false);
  
   const { user, setSelectedChat, chat, setChat,
        toggle,  overViewButton,allButton,addBtton,activeButton,customerButton,holdOrganization, setHoldOrganization } = useContext(UserContext)

   

 
  
  const submit = async () =>
  {
     setLoading(true)
    try
    {
      await axios.get(`https://caretagback.herokuapp.com/api/admin/all/orginazation/search?search=${dataSearch}`).then((result) =>
      {
        console.log(result?.data)
        setHoldOrganization(result?.data[0]?.agent)
        console.log("na the data i won map", holdOrganization)
         setLoading(false);
              
                    
           myNavigation("/mapshow")
                  
                
      }).catch((err) =>
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
        console.log("opps function not working", err)
      })
    } catch (error)
    {
      console.log("error in performing function something went wrong", error)
    }
  }
    
    const getData = async () =>
    {
        try
        {
            await axios.get("https://caretagback.herokuapp.com/api/admin/all/orginazation/get").then((result) =>
            {
                setData(result?.data?.data)
                console.log("all company", data)
            }).catch((error) =>
            {
                console.log("can't get data", error)
            })
            
        } catch (error)
        {
            console.log("error in gett data", error)
        }
    }

    React.useEffect(() =>
    {
        getData()
    },[])
  return (
    <Box className={classes.root}>
        <Box className='HolderCon'>
            <Box className='box1'>
                  <Box className='conDiv'>
                      <Box>
                    <TextField
          id="filled-select-currency-native"
          select
          label="Select Organization"
          
          value={dataSearch}
          onChange={(e)=> setDataSearch(e.target.value) }
          className="selectionCon"
          SelectProps={{
            native: true,
          }}
         
          variant="filled"
        >
          {data.map((option) => (
            <option key={option.organizationName} value={option.organizationName}>
              {option.organizationName}
            </option>
          ))}
                          </TextField>
                          </Box>
                      
                     <Box className='dbutton'>
              <Button className='myButton' onClick={() =>
              {
                console.log(dataSearch)
                submit()
                          }}>
                              <Typography> Browse</Typography>
                          </Button>
                </Box>
                </Box>
                
            </Box>
            <Box className='box2'>
                <Box className='box2Image'><img src={pic} style={{width:"100%", height:"100%", objectFit:"contain"}}/></Box>
            </Box>
      </Box>
      {loading ? <Loading loading={loading} /> : null}
    </Box>
  )
}

export default AgentLocation