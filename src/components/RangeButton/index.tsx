import { Button, styled } from "@mui/material";
import { purple } from "@mui/material/colors";

export const CustomRangeButton = styled(Button)({
  textTransform: 'none',
  fontFamily: [
    'Inter'
  ].join(','),
  fontWeight: 400,
  borderColor: purple[600],
  color: purple[700],
  '&:hover': {
    borderColor: purple[700],
    backgroundColor: purple[100]
  }

})