import React from 'react'
import {AppBar, Button,Toolbar, Tabs, Tab,Typography,useMediaQuery, useTheme, Box} from "@mui/material"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { display, flexbox } from '@mui/system';

const useStyles = makeStyles((theme)=>({
    root:{
    
      "& .textBox":{
        height:"50px",
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
            fontSize:"15px",
            fontWeight:"600",
            color:"white",
            lineHeight:"40px"
          
        //    "@media (max-width: 800px)":{
        //      fontSize:"65px",
        //     }
          }
      }


    }
    
}))


function GlobalButton({children, vart,color}) {
    const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button  variant="contained" className='textBox' type="submit" >  <Typography>{children}</Typography></Button>
    </div>
  )
}

export default GlobalButton
