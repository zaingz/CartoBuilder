import React, { FC } from "react";
import { Grid, Button, Typography, Box } from "@mui/material";

import MapIcon from "@mui/icons-material/Map";

import { Link } from "react-router-dom";

const WelcomeView: FC = () => {
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }} // ;Adjust as per your requirement
    >
      <Grid xs={12} sm={6} md={4}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <MapIcon sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h2" align="center">
            Carto Demo
          </Typography>
        </Box>
        <Grid container justifyContent="center" marginTop={2}>
          <Link to="/builder">
            <Button variant="contained" color="primary">
              Launch Builder
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WelcomeView;
