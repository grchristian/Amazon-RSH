import React from 'react'
import PropTypes from 'prop-types';

import ReactAudioPlayer from 'react-audio-player';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Dialog, DialogTitle, ListItemAvatar } from '@mui/material';
import { green, red } from '@mui/material/colors';

import CallIcon from '@mui/icons-material/Call';
import CallEndIcon from '@mui/icons-material/CallEnd';

function IncomingCall(props) {

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <ReactAudioPlayer
  src="/skype.mp3"
  autoPlay
/>
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

IncomingCall.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default IncomingCall