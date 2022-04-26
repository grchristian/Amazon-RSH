import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import VideoFileIcon from '@mui/icons-material/VideoFile';

import { Container, Typography } from '@mui/material';

function AgentRecordings() {

  const videos = [
    {
      title: "Video 1",
      date: "Feb 08, 2022"
    },
    {
      title: "Video 2",
      date: "Aug   27, 2022"
    },
    {
      title: "Video 3",
      date: "Oct 23, 2022"
    },
    {
      title: "Video 4",
      date: "Nov 16, 2022"
    }
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        My recordings
      </Typography>
      <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
        {
          videos.map(video => {
            return(
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <VideoFileIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={video.title} secondary={video.date} />
              </ListItem>
            )
          })
        }
      </List>
    </Container>
  );
}

export default AgentRecordings;
