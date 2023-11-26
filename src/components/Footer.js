import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const footerStyle = {
    background: '#333',
    color: '#fff',
    padding: '20px',
  };

  const elementStyle = {
    display: 'block',
    margin: '10px',
  };

  return (
    <Paper elevation={3} style={footerStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <Typography
            variant="h6"
            style={elementStyle}
            sx={{ textTransform: 'uppercase' }}
          >
            About us
          </Typography>
          <Typography variant="body1" style={elementStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <Typography
            variant="h6"
            style={elementStyle}
            sx={{ textTransform: 'uppercase' }}
          >
            Information
          </Typography>
          <Typography variant="body1" style={elementStyle}>
            Lorem ipsum
          </Typography>
          <Typography variant="body1" style={elementStyle}>
            Privacy & Policy
          </Typography>
          <Typography variant="body1" style={elementStyle}>
            Terms & Conditions
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <Typography
            variant="h6"
            style={elementStyle}
            sx={{ textTransform: 'uppercase' }}
          >
            My account
          </Typography>
          <Typography variant="body1" style={elementStyle}>
            Initiatives and projects
          </Typography>
          <Typography variant="body1" style={elementStyle}>
            Favorite animals
          </Typography>
          <Typography variant="body1" style={elementStyle}>
            My Account
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <InstagramIcon fontSize="large" />
        </Grid>
        <Grid item>
          <FacebookIcon fontSize="large" />
        </Grid>
        <Grid item>
          <TwitterIcon fontSize="large" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;