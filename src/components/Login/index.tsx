import { Box } from "@mui/material";
import React from "react";
import { CustomButton } from "../Button";


// const clientId = process.env.REACT_APP_CLIENT_ID
// const redirectUri = process.env.REACT_APP_REDIRECT_URI
// const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT
// const responseType = process.env.REACT_APP_RESPONSE_TYPE


function Login() {


  return(
    <Box sx={{
      marginBottom: '25px',
    }}>
      <CustomButton>
        Login with Spotify
      </CustomButton>
    </Box>
  );
}

export default Login;
