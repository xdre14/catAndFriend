import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Colors } from '../styles';

const StyledDivider = styled((props) => {
  return (
    <Divider variant="middle" sx={{ background: Colors.primary }} {...props} />
  );
})``;

const MenuDrawer = ({ isDrawer, setIsDrawer }) => {
  const DrawerStyle = {
    sx: {
      borderRadius: '0px 10px 0px 0px',
      borderRight: `1px solid ${Colors.secondary}`,
      background: Colors.dark,
      color: Colors.white,
      width: 300,
      px: 2,
    },
  };
  return (
    <Drawer
      open={isDrawer}
      PaperProps={DrawerStyle}
      onClose={() => setIsDrawer(false)}
    >
      <List>
        <ListItemButton>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
        <StyledDivider />
        <ListItemButton>
          <ListItemText>Volonteer</ListItemText>
        </ListItemButton>
        <StyledDivider />

        <Accordion
          elevation={0}
          sx={{ background: Colors.dark, color: Colors.white }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: Colors.white }} />}
          >
            <Typography>Stories</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <StyledDivider />
            <ListItemButton>
              <ListItemText>Blog</ListItemText>
            </ListItemButton>
            <StyledDivider />
            <ListItemButton>
              <ListItemText>Podcast</ListItemText>
            </ListItemButton>
          </AccordionDetails>
        </Accordion>

        <StyledDivider />
        <ListItemButton>
          <ListItemText>Login</ListItemText>
        </ListItemButton>
        <StyledDivider />
        <ListItemButton>
          <ListItemText>Contact Us</ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
  );
};
export default MenuDrawer;
