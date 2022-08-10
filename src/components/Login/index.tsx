import { Box, Button, ButtonProps } from "@mui/material";
import React, { FC } from "react";
import { CustomButton } from "../Button";
import {signIn} from 'next-auth/react';

export const Login: FC<ButtonProps> = ({ ...props }) => (
  <CustomButton
    onClick={() =>
      signIn("spotify", {
        callbackUrl: "/",
      })
    }
    {...props}
  >
    Login with Spotify
  </CustomButton>
);
