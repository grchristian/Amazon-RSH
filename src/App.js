import * as React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Link } from "react-router-dom";
import { alpha, styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Button, Dialog, DialogTitle, ListItemAvatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { blue, green, red } from '@mui/material/colors';



// AGENT VIEWS
import AgentDashboard from "./Views/agentViews/AgentDashboard";
import AgentCallHistory from "./Views/agentViews/AgentCallsHistory";
import AgentProfile from "./Views/agentViews/AgentProfile";
import AgentRecordings from "./Views/agentViews/AgentRecordings";
import QuestionDB from "./Views/agentViews/QuestionDB";
import AgentSettings from "./Views/agentViews/AgentSettings";

// Icons
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import VideocamIcon from '@mui/icons-material/Videocam';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import CallIcon from '@mui/icons-material/Call';
import CallEndIcon from '@mui/icons-material/CallEnd';

const drawerWidth = 240;

const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary
}));

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Incoming call</DialogTitle>
      <List sx={{ pt: 0 }}>
          <ListItem button onClick={() => handleListItemClick("pick_up")} key="pick_up">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
                <CallIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Pick up" />
          </ListItem>

          <ListItem button onClick={() => handleListItemClick("hang_up")} key="hang_up">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: red[100], color: red[600] }}>
                <CallEndIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Hang up" />
          </ListItem>

      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function PermanentDrawerLeft() {

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Amazon RSH
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
        <CustomLink to="/">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </CustomLink>

            <CustomLink to="/profile">
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={"Profile"} />
              </ListItem>
            </CustomLink>

            <CustomLink to="/calls">
              <ListItem button>
                <ListItemIcon>
                  <PermPhoneMsgIcon />
                </ListItemIcon>
                <ListItemText primary={"Call history"} />
              </ListItem>
            </CustomLink>

            <CustomLink to="/recordings">
              <ListItem button>
                <ListItemIcon>
                  <VideocamIcon />
                </ListItemIcon>
                <ListItemText primary={"Recordings"} />
              </ListItem>
            </CustomLink>

            <CustomLink to="/questiondb">
              <ListItem button>
                <ListItemIcon>
                  <QuestionAnswerIcon />
                </ListItemIcon>
                <ListItemText primary={"Question database"} />
              </ListItem>
            </CustomLink>

            <CustomLink to="/settings">
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={"Settings"} />
              </ListItem>
            </CustomLink>

            <ListItem button onClick={handleClickOpen}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={"Call Dialog"} />
              </ListItem>

      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
              
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<AgentDashboard />} />
          <Route path="/profile" element={<AgentProfile />} />
          <Route path="/recordings" element={<AgentRecordings />} />
          <Route path="/questiondb" element={<QuestionDB />} />
          <Route path="/settings" element={<AgentSettings />} />
        </Routes>
      </Box>
    </Box>
  );
}