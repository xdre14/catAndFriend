import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import myTheme from '../styles/index';
import '@fontsource/allison';
import { Box, Divider, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Colors } from '../styles/index';

const Header = ({ setIsDrawer }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const isMediumScreen = useMediaQuery('(max-width: 900px)');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const headerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'space-between',

    padding: '0 16px',
  };

  const specialTitleStyle = {
    fontSize: isMobile ? '40px' : '65px',
    fontWeight: 'bold',
    color: myTheme.palette.primary.main,
  };

  const menuButtonStyle = {
    marginRight: isMobile ? '0' : '16px',
    fontSize: '15px',
  };

  const buttonStyle = {
    fontSize: '15px',
    color: 'black',
  };

  const spaceStyle = {
    margin: isMobile ? '20px 0' : '0 5px',
  };

  const iconStyle = {
    fontSize: '25px',
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <AppBar position="static" style={headerStyle}>
        <Toolbar>
          {isMediumScreen ? (
            <IconButton
              edge="start"
              color="inherit"
              style={menuButtonStyle}
              onClick={() => setIsDrawer((prev) => !prev)}
            >
              <MenuIcon data-testid="MenuIcon" />
            </IconButton>
          ) : null}
          <Typography variant="h6" style={specialTitleStyle}>
            Cats & Friends
          </Typography>
          {isMediumScreen ? null : (
            <div style={spaceStyle}>
              <Button color="inherit" style={buttonStyle}>
                HOME
              </Button>

              <Button color="inherit" style={buttonStyle}>
                VOLUNTEER
              </Button>

              <Button
                color="inherit"
                onClick={openMenu}
                style={buttonStyle}
                endIcon={<ExpandMoreIcon sx={{ color: Colors.black }} />}
                sx={{ textTransform: 'uppercase' }}
              >
                Stories
              </Button>

              <Button color="inherit" style={buttonStyle}>
                LOGIN
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeMenu}
              >
                <MenuItem>BLOG</MenuItem>
                <MenuItem>PODCAST</MenuItem>
              </Menu>
            </div>
          )}
          {isMobile ? null : (
            <Box sx={{ display: 'flex' }}>
              <IconButton style={iconStyle}>
                <FavoriteIcon />
              </IconButton>
              <Divider orientation="vertical" variant="middle" />
              <IconButton style={iconStyle}>
                <PersonIcon />
              </IconButton>
              <Divider orientation="vertical" variant="middle" />
              <IconButton style={iconStyle}>
                <NotificationsIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
