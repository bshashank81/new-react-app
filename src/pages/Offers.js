import { Grid, Typography } from "@mui/material";
import React from "react";
import DressesBg from "../assets/DressesBg.jpg";

const Offers = () => {
  return (
    <Grid container direction="row" sx={{ backgroundColor: "yellow" }}>
      <Grid
        sx={{
          width: `calc(100vw - 1100px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontSize="45px" fontStyle="bold" sx={{ width: "120px" }}>
          Ugadi Festival Sale
        </Typography>
      </Grid>
      <Grid>
        <img src={DressesBg} height="710px" width="1100px" />
      </Grid>
    </Grid>
  );
};

export default Offers;
