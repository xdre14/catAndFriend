import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import mainCat from "../img/mainCat.png";
import { useMediaQuery, useTheme } from "@mui/material";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const paperStyle = {
    padding: "116px",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
   
  };

  const buttonStyle = {
    borderRadius: "0",
    "&:hover": {
      color: "white",
    },
    width: "100%",
    marginTop: "50px", 
  };

  return (
    <Paper elevation={3} style={paperStyle}>
      <Grid container spacing={2}>
        {isMobile ? (
          <Grid item xs={12}>
            <img src={mainCat} alt="Main Cat" style={{ width: "100%" }} />
          </Grid>
        ) : (
          <Grid item xs={12} md={6}>
            <img src={mainCat} alt="Main Cat" style={{ width: "100%" }} />
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Our motto</Typography>
          <Typography variant="subtitle1" fontSize="100px">Help animals</Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Button variant="contained" color="primary" sx={buttonStyle}>
            Donate
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Banner;
