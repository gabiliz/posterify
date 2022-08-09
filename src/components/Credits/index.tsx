import { Favorite } from "@mui/icons-material";
import { Box, Link } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";
export const Credits = () => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <Box component="span">
      Made with
    </Box>
    <Favorite sx={{ 
      color: 'red',
      marginX: '5px'
    }} />
    <Box component="span">
      by
    </Box>
    <Link href="https://github.com/gabiliz" underline="none" color={purple[700]} sx={{
      marginLeft: '5px'
    }}>
      @gabiliz
    </Link>
  </Box>
);