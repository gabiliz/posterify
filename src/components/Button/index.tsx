import { Button, styled } from "@mui/material";
import { purple } from "@mui/material/colors";

export const CustomButton = styled(Button)({
  textTransform: 'none',
  fontFamily: [
    'Inter'
  ].join(','),
  fontWeight: 400,
  backgroundColor: purple[600],
  color: "white",
  borderColor: purple[50],
  '&:hover': {
    backgroundColor: purple[700],
    borderColor: purple[50],
  }

})