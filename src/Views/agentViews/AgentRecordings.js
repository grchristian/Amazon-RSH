import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import { alpha, styled } from '@mui/material/styles';

import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
  
  const tags = ["Solved", "To review", "Annoying user", "Impatient user", "Internet search", "Medium quality", "Search in previously solved problems", "Account error service", "Personal information within the video", "Review because of element in the recording not working"];

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Recording list
      </Typography>
      
      <Grid container spacing={2}>
  <Grid item xs={4}>
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
  </Grid>
  <Grid item xs={4}>
    <Typography variant='button' style={{display: 'block'}}>Date</Typography>
    <Typography variant='body2' style={{display: 'block'}} gutterBottom>26/04/22</Typography>

    <Typography variant='button' style={{display: 'block'}}>Agent ID</Typography>
    <Typography variant='body2' style={{display: 'block'}} gutterBottom>21453</Typography>

    <Typography variant='button' style={{display: 'block'}}>Length</Typography>
    <Typography variant='body2' style={{display: 'block'}} mb={4}>20 minutes</Typography>

    <Typography variant='button' style={{display: 'block'}}>User ID</Typography>
    <Typography variant='body2' style={{display: 'block'}} gutterBottom>65433</Typography>

    <Typography variant='button' style={{display: 'block'}}>User Name</Typography>
    <Typography variant='body2' style={{display: 'block'}} gutterBottom>Karen Macías</Typography>

    <Typography variant='button' style={{display: 'block'}}>Requested service</Typography>
    <Typography variant='body2' style={{display: 'block'}} mb={4}>Account support</Typography>
      
    <Box sx={{ lineHeight: '20px' }}>
      {tags.map(tag => (
        <Box sx={{ display: 'inline' }} mr={1}>
          <Chip label={tag} variant="outlined" />
        </Box>   
      ))}
    </Box>
  </Grid>
  <Grid item xs={4}>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/tmjN49jEDzQ&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen></iframe>

  </Grid>
</Grid>
    </>
  );
}

export default AgentRecordings;
