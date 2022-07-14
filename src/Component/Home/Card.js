import React from 'react'
import { display, styled } from '@mui/system';
import pic from "./3.png"
import { Typography } from '@material-ui/core';
import GlobalButton from '../Theme/GlobalButton';

const BoxInfo = styled('div')({
    height:"350px",
    width:"100%",
  
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",



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
        width:"100%",
        height:"100%",
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



function Card({fd}) {
  return (
    <BoxInfo>
    <Box1>
    <ImgCard>
    <img src={pic} />
    </ImgCard>
    
    </Box1>
    <Box2>
        <TitleCon><Typography>Register Your Organization/Branch</Typography></TitleCon>
        <TextContent>   Create your free CareTags account and safely connect with peer support groups, 
        coaches, and trained peer support specialists anytime and anywhere 
        from any device.</TextContent>
        <ButtonCon>
            <GlobalButton>Register  Branch</GlobalButton>
        </ButtonCon>
    </Box2>
    </BoxInfo>
  )
}

export default Card