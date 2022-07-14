import React from 'react'
import { display, styled } from '@mui/system';
import pic from "./4.png"
import { Typography } from '@material-ui/core';
import GlobalButton from '../Theme/GlobalButton';

const BoxInfo = styled('div')({
    height:"350px",
    width:"100%",
  
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row-reverse",
    transition: "all 350ms",




    "@media (max-width: 800px)":{
        width:"100%",
        height:"auto",
        
   }
  });
const Box1 = styled('div')({
    height:"100%",
            
    width:"50%",
    display:"flex",
   
    
   
 
    "@media (max-width: 800px)":{
        width:"100%",
        height:"290px"
   }
  });
const Box2 = styled('div')({
   
        height:"100%",
        display:"flex",
        flexDirection:"column",
        width:"50%",
        justifyContent:"center",

        "@media (max-width: 800px)":{
            width:"90%",
            height:"300px"
       }
  
  });
const ImgCard = styled('div')({
   
    width:"100%",
    height:"100%",
  

    "@media (max-width: 800px)":{
        width:"90%",
        height:"90%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
   },
    

    img:{
        width:"100%", 
        height:"100%",
        objectFit:"contain"
    }
    
       
  
  });
const TextContent = styled('div')({
   
       
  
  });
const ButtonCon = styled('div')({
   
       
  
  });
const TitleCon = styled('div')({
   
    "& .MuiTypography-root":{
        fontSize:"25px",
        fontWeight:"500",
        color:"314A72",
        lineHeight:"40px",
        
        "@media (max-width: 800px)":{
            fontSize:"15px",
            fontWeight:"600",
            
       },

      },
  
  });



function Card2() {
  return (
    <BoxInfo>
    <Box1>
    <ImgCard>
    <img src={pic} />
    </ImgCard>
    
    </Box1>
    <Box2>
        <TitleCon><Typography>Assign Agent</Typography></TitleCon>
        <TextContent> Join video meetings where you can talk with a small group of peers that are dealing with similar issues. Our meetings are confidential, and include password protection and the option of joining anonymously. 
        Each meeting is facilitated by a trained Peer Supporter.</TextContent>
        <ButtonCon>
            <GlobalButton>Register Agent</GlobalButton>
        </ButtonCon>
    </Box2>
    </BoxInfo>
  )
}

export default Card2