import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'black'
  },
  grow: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper:{
    padding: 16,
    textAlign:'center',
    color: theme.palette.text.secondary,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
      // <AppBar position="fixed" color="primary" className={classes.appBar}>
      //   <Toolbar>
        <Box className={classes.grow} display='flex'>
          <Grid item xs={12} sm={4}><Paper className={classes.paper}>Primera parte</Paper></Grid>
          <Grid item xs={12} sm={4}><Paper className={classes.paper}>Primera parte</Paper></Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <IconButton edge="end" color="inherit">
                <FacebookIcon color="primary"/>
              </IconButton>
              <IconButton edge="end" color="inherit">
                <InstagramIcon color="secondary"/>
              </IconButton>
              <IconButton edge="end" color="inherit">
                <TwitterIcon color="primary"/>
              </IconButton></Paper></Grid>
        {/* <Box component="div" display="inline">inline</Box>
        <Box component="div" display="inline">inline</Box>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <Box component="div" display="inline">inline</Box>
          <Box component="div" display="inline">Evita el exceso</Box>
          <IconButton edge="end" color="inherit">
            <FacebookIcon color="primary"/>
          </IconButton>
          <IconButton edge="end" color="inherit">
            <InstagramIcon color="secondary"/>
          </IconButton>
          <IconButton edge="end" color="inherit">
            <TwitterIcon color="primary"/>
          </IconButton> */}
          </Box>
      //   </Toolbar>
      // </AppBar>
  );
}
