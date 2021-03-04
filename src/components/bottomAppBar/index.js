import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';


const useStyles = makeStyles((theme) => ({
  paragraph:{
    margin:0,
    padding:0,
  },
  paper: {
    padding: 16,
    textAlign:'center',
    color: 'white',
    background: 'black'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'black'
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '-5px auto',
    background:'#ffeb3b'
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
        <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <h3 className={classes.paragraph}>Contacto</h3>
              <p className={classes.paragraph}>Tel. 56-11-12-40-34</p>
              <p className={classes.paragraph}>Email: contacto@chelap.com</p>
              <p className={classes.paragraph}>Direccion: entu corazon <FavoriteIcon/></p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <p><Filter9PlusIcon/></p>
              <p>Evita el exceso</p>
            </Paper>
          </Grid>
          <Fab aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
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
              </IconButton>
            </Paper>
            </Grid>
        </Toolbar>
      </AppBar>
  );
}
