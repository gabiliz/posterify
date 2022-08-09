import { Box, ButtonGroup } from "@mui/material"
import React from "react"
import { CustomButton } from "../Button"
import TimeRangeSelector from "../TimeRangeSelector"

function Form() {

  return (
    <Box>
      <Box component="p">
        Welcome,
      </Box>
      <Box>
        <TimeRangeSelector />
      </Box>
      <Box>
        <ButtonGroup>
          <CustomButton>
            Top Tracks
          </CustomButton>
          <CustomButton>
            Top Artists
          </CustomButton>
        </ButtonGroup>
      </Box>
    </Box>
  )
}
export default Form