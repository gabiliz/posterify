import { ButtonGroup } from "@mui/material";
import React from "react";
import { CustomRangeButton } from "../RangeButton";

function TimeRangeSelector() {
  
  return (
    <ButtonGroup variant="outlined" sx={{
      marginBottom: '25px',
    }}>
      <CustomRangeButton>
        Last Month
      </CustomRangeButton>
      <CustomRangeButton>
        Last 6 Months
      </CustomRangeButton>
      <CustomRangeButton>
        All Time
      </CustomRangeButton>
    </ButtonGroup>
  )
}

export default TimeRangeSelector;