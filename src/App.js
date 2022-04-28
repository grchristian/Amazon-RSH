import * as React from 'react';
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

// AGENT VIEWS
import AgentDashboard from "./views/agentViews/AgentDashboard";
import AgentCallHistory from "./views/agentViews/AgentCallsHistory";
import AgentProfile from "./views/agentViews/AgentProfile";
import AgentRecordings from "./views/agentViews/AgentRecordings";
import QuestionDB from "./views/agentViews/QuestionDB";
import AgentSettings from "./views/agentViews/AgentSettings";

// Icons
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import VideocamIcon from '@mui/icons-material/Videocam';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import IncomingCall from './components/IncomingCall';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import CallIcon from '@mui/icons-material/Call';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import CallEndIcon from '@mui/icons-material/CallEnd';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import RateCall from './views/agentViews/RateCall';

const drawerWidth = 240;

const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary
}));

export default function PermanentDrawerLeft() {

  const menuLinkItems = [
    { icon: <HomeIcon />, name: 'Home', link: '/' },
    { icon: <PersonIcon />, name: 'Profile', link: '/profile' },
    { icon: <PermPhoneMsgIcon />, name: 'Call history', link: '/calls' },
    { icon: <VideocamIcon />, name: 'Recordings', link: '/recordings' },
    { icon: <QuestionAnswerIcon />, name: 'Question Database', link: '/questiondb' },
    { icon: <SettingsIcon />, name: 'Settings', link: '/settings' },
  ];

  const callActions = [
    { icon: <Link to="/rate"><CallEndIcon /></Link>, name: 'Hang up', onclick: () => { handleActiveCall(false) } },
    { icon: <FiberManualRecordIcon />, name: 'Start recording' },
    { icon: <PauseIcon />, name: 'Pause recording' },
    { icon: <StopIcon />, name: 'Stop recording' },
  ];

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);

    if(value == "pick_up") {
      handleActiveCall(true);
    }

  };


  const [activeCall, setActiveCall] = React.useState(false);

  const handleActiveCall = value => {
    setActiveCall(value);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={activeCall && { backgroundColor: '#4caf50' }}>
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

          {menuLinkItems.map((item) => (
          <CustomLink to={item.link}>
            <ListItem button>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </CustomLink>
          ))}

            <ListItem button onClick={handleClickOpen}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={"Call Dialog"} />
              </ListItem>

      <IncomingCall
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
          <Route path="/recordings" element={<AgentRecordings />}>
            <Route path=":recordingId" element={<AgentRecordings />} />
          </Route>
          <Route path="/questiondb" element={<QuestionDB />} />
          <Route path="/settings" element={<AgentSettings />} />
          <Route path="/rate" element={<RateCall />} />
        </Routes>

        {activeCall && 
        <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<CallIcon />}
      >
        {callActions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onclick}
          />
        ))}
      </SpeedDial>
      }
      </Box>
    </Box>
  );
}