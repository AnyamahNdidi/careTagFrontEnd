import React,{useContext} from 'react'
import
    {
        AppBar, Toolbar, Tabs, Tab, Typography, useMediaQuery, useTheme, Box, TextField, Button,
        FilledInput,InputAdornment,IconButton,FormControl,InputLabel, Input,Skeleton 
    } from "@mui/material"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { display, height } from '@mui/system';
import img from "./2.jpg"
import SendIcon from '@mui/icons-material/Send';
import {
	useJsApiLoader,
	GoogleMap,
	Marker,
	Autocomplete,
    DirectionsRenderer,
    InfoWindow
} from "@react-google-maps/api";
import pix from "./2.png"
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { UserContext } from "../GlobalContex/Globastate"
import place from "./places.json"
const center22 = { lat: 48.8584, lng: 2.2945 }


const useStyles = makeStyles((Theme) => ({
     root: {
            width: "100vw",
            height: "100vh",
        position: "relative",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        
          "@media (max-width: 800px)": {

                width:"100%",
            },
             
            
        "& .myFirst": {
            position: "absolute",
            top: "0px",
            left: "0px",
            height: "100%",
            width: "100%",

             "@media (max-width: 800px)": {

                width:"100%",
            }
             
          
            
        },
        "& .mySecond": {
            padding: "4px",
            borderRadius: "5px",
            backgroundColor: "white",
            width: "auto",
            marginTop: "4px",
            zIndex:"1"
        },
        "& .myThird": {
           
            borderRadius: "5px",
            backgroundColor: "#F5F6F6",
            width: "100%",
            marginTop: "4px",
            zIndex: "1",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column",
        },
        "& .inputTextCon": {
            display:"flex"
        },
        "& .conDis": {
            display: 'flex',
            width: "90%",
            justifyContent:"space-between"
        },
        "& .allAgentBox": {
            width: "100%",
            height: "100%",
            display:"flex",
            alignItems: "center",
         
            justifyContent:"space-around",
            overflowX: 'auto',

            "@media (max-width: 800px)": {

                paddingLeft:"100px",
            }
             
        },
        "& .agentConBox": {
            width: "190px",
            height: "90%",
            marginRight: "5px",
            marginBottom: "5px",
            flexShrink: "0",
            cursor: "pointer",
            marginLeft:"10px",
            boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",

            "@media (max-width: 800px)":{
             
            }
        },
        "& .dName": {
            
            "& .MuiTypography-root":{
            fontSize:"15px",
            fontWeight:"600",
            color:"blue",
           
          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
        },
        "& .dImgHolder": {
            width: "100%",
            height: "70px",
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
        },
        "& .myImg": {
            borderRadius: "50%",
            height: "60px",
            width: "60px",
           
        },
        "& .nameCon":{
            height: "auto",
            width: '100%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
              "& .MuiTypography-root":{
            fontSize:"15px",
            fontWeight:"600",
            color:"#191E23",
           
          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
        },
        "& .locationCon": {
             height: "auto",
            width: '100%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
              "& .MuiTypography-root":{
            fontSize:"15px",
            fontWeight:"600",
            color:"#191E23",
           
          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
            
        },
        "& .charCall": {
            display: "flex",
            width: "100%",
            height: "auto",
            justifyContent:"space-around",
        },
        "& .chatBox": {
            display: "flex",
            width: "auto",
            marginTop:"5px"
        },
        "& .agentBox": {
            height: "100px",
            width: "150px",
            display: "flex",
            flexDirection: "column",
            
           
            
        }
          
            
            
    }
}))
function Locationmap ()
{

      const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBIe8lcH1rTX_sBfYeopfTGOjudCxQoPGo",
        libraries:["places"]
            
      })
    
    console.log("opppoppppp all the places should show", place)
    const classes = useStyles()
    const [latitude, setLatitude] = React.useState(0)
    const [longtitude, setLongtitude] = React.useState(0)
    const { holdOrganization, setHoldOrganization } = useContext(UserContext)
    console.log("agent data i want to map", holdOrganization)
    const [directionsResponse, setDirectionsResponse] = React.useState(null);
	const [distance, setDistance] = React.useState('');
    const [duration, setDuration] = React.useState('');
    const [originRef, setOriginRef] = React.useState('');       
    const [destiantionRef, setdestiantionRef] = React.useState(''); 
    const [infoWindowID, setInfoWindowID] = React.useState("");

   

    React.useEffect(() =>
    {
        if (navigator.geolocation)
        {
            navigator.geolocation.watchPosition((position) =>
            {
                setLatitude(position.coords.latitude)
                setLongtitude(position.coords.longitude)
                console.log("this in my lat and log", latitude, longtitude)
                console.log(position.coords)
            })
        }
    }, [])
    
    const center = { lat: latitude, lng: longtitude };

    const [map, setMap] = React.useState(/** @type google.maps.Map */ (null));
  

    if (!isLoaded)
    {
        return  <Box> <Skeleton animation="wave" /><Skeleton animation={false} /></Box>
    }

    async function calculateRoute() {
    if (originRef === '' || destiantionRef === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef,
      destination: destiantionRef,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

   
   
  return (
      <>
          <Box className={classes.root}>
              <Box className='myFirst'>
                  <GoogleMap
                      center={center}
                      zoom={10}
                      mapContainerStyle={{ width: "100%", height: "100%" }}
                      city={place}
                      options={{
						zoomControl: false,
						streetViewControl: false,
						mapTypeControl: false,
						fullscreenControl: false,
                      }}
                      onLoad ={(map)=> setMap(map)}
                      
                  >
                      {
                          holdOrganization.map((props) => (
                              <div>
                                  
                                  <Marker
                                     
                          id={props._id}
                          key={props._id}
                                      position={{ lat: props.location.coordinates[1], lng: props.location.coordinates[0] }}
                                      onClick={() =>
                                      {
                                        setInfoWindowID(props._id);
                                      }}
                                  >
                                       {infoWindowID === props._id && (
                                          <InfoWindow>
                                              <div className='agentBox'>
                                                  <div><span style={{fontWeight:"500", marginBottom:"5px"}}>Agent Name:</span>{props.agentName }</div>
                                                  <div><span style={{fontWeight:"500"}}>Agent Location:</span>{props.dlocation }</div>
                                                  <div><span style={{ fontWeight: "500" }}>Agent Location:</span>{props.organizationName}</div>
                                                  <Box className='chatBox'>
                                  <ChatBubbleIcon style={{color:"green"}}/>
                                  <Typography>Chat</Typography>
                              </Box>
                              
                                              </div>
                  
                                        </InfoWindow>
              )}
                                
                                  </Marker>
                              </div>
                          ))
                      }
                      
                    
                       {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
                  </GoogleMap>
              </Box>
              <Box className="mySecond">
           
              </Box>
              <Box className="myThird">
                  <Box className='dName'><Typography>Available Agent By Location</Typography></Box>
                 
                
                  
                  <Box className='allAgentBox'>
                      {
                          holdOrganization?.map((props) => (
                                 <Box className='agentConBox'>
                          <Box className='dImgHolder'>
                              <Box className='myImg'>
                                  <img src={pix} style={{width:"100%", height:"100%", objectFit:"cover",  borderRadius:"50%"}}/>
                              </Box>
                          </Box>
                                  <Box className='nameCon'><Typography>{props.agentName }</Typography></Box>
                                  <Box className="locationCon"><Typography>{props.dlocation }</Typography></Box>
                          <Box  className='charCall'>
                              <Box className='chatBox'>
                                  <ChatBubbleIcon style={{color:"green"}}/>
                                  <Typography>Chat</Typography>
                              </Box>
                              
                          </Box>
                      </Box>
                          ))
                      }
                   
                      
                    
                     
                  </Box>
              </Box>
          </Box>
      </>
  )
}

export default Locationmap


    //    <Box className="inputTextCon" >
    //                   <Autocomplete>
    //                       <Input type='text' placeholder='Origin'
    //                           value={originRef}
    //                           onChange={(e) => setOriginRef(e.target.value)}/>
    //                   </Autocomplete>

    //                   <Autocomplete>
    //                       <Input sx={{ marginLeft: "10px" }} type='text' placeholder='Destination'
    //                            value={destiantionRef}
    //                           onChange={(e) => setdestiantionRef(e.target.value)}
    //                       />
    //                   </Autocomplete>
                            
                     
    //                   <Button type='submit' onClick={() =>
    //                   {
    //                       calculateRoute()
    //                       console.log(originRef, destiantionRef, "wetin i won put for input")
    //                   }}>
    //                       Calculate Route
    //                   </Button>
    //               </Box>
    //               <Box className="conDis">
    //                   <Box> <Typography>Distance: { distance}</Typography> </Box>
    //                   <Box> <Typography>Duration: {duration }</Typography>  </Box>
    //                   <Box >
    //                       <Button variant="outlined"
    //                           onClick={()=> map.panTo(center)}
    //                       >
    //                            <SendIcon/>     
    //                   </Button>
    //                   </Box>
    //               </Box> 