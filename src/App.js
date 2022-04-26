import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Routes, Route, Link } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

// ICONOS
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import VideocamIcon from '@material-ui/icons/Videocam';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

// AGENT VIEWS
import AgentDashboard from "./Views/agentViews/AgentDashboard";
import AgentCallHistory from "./Views/agentViews/AgentCallsHistory";
import AgentProfile from "./Views/agentViews/AgentProfile";
import SettingsIcon from '@material-ui/icons/Settings';
import AgentRecordings from "./Views/agentViews/AgentRecordings";
import QuestionDB from "./Views/agentViews/QuestionDB";
import AgentSettings from "./Views/agentViews/AgentSettings";


const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
        <Drawer
          style={{ width: "220px" }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>

            <Link to="/profile" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={"Profile"} />
              </ListItem>
            </Link>

            <Link to="/calls" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <PermPhoneMsgIcon />
                </ListItemIcon>
                <ListItemText primary={"Call history"} />
              </ListItem>
            </Link>

            <Link to="/recordings" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <VideocamIcon />
                </ListItemIcon>
                <ListItemText primary={"Recordings"} />
              </ListItem>
            </Link>

            <Link to="/questiondb" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <QuestionAnswerIcon />
                </ListItemIcon>
                <ListItemText primary={"Question database"} />
              </ListItem>
            </Link>

            <Link to="/settings" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={"Settings"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>

        <Routes>
          <Route path="/" element={<AgentDashboard />} />
          <Route path="/profile" element={<AgentProfile />} />
          <Route path="/calrecordingsls" element={<AgentRecordings />} />
          <Route path="/questiondb" element={<QuestionDB />} />
          <Route path="/settings" element={<AgentSettings />} />
        </Routes>
      </div>
  );
}

export default App;
