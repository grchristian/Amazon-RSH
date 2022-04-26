import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { alpha, styled } from '@mui/material/styles';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// ICONOS
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import VideocamIcon from '@mui/icons-material/Videocam';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';

// AGENT VIEWS
import AgentDashboard from "./Views/agentViews/AgentDashboard";
import AgentCallHistory from "./Views/agentViews/AgentCallsHistory";
import AgentProfile from "./Views/agentViews/AgentProfile";
import AgentRecordings from "./Views/agentViews/AgentRecordings";
import QuestionDB from "./Views/agentViews/QuestionDB";
import AgentSettings from "./Views/agentViews/AgentSettings";

function App() {
  
  const CustomDrawer = styled(Drawer)(({ theme }) => ({
    width: "inherit"
  }));
  
  const CustomLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.text.primary
  }));

  return (
    <div style={{ display: "flex" }}>
        <CustomDrawer
          style={{ width: "220px" }}
          variant="persistent"
          anchor="left"
          open={true}
        >
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
          </List>
        </CustomDrawer>

        <Routes>
          <Route path="/" element={<AgentDashboard />} />
          <Route path="/profile" element={<AgentProfile />} />
          <Route path="/recordings" element={<AgentRecordings />} />
          <Route path="/questiondb" element={<QuestionDB />} />
          <Route path="/settings" element={<AgentSettings />} />
        </Routes>
      </div>
  );
}

export default App;
