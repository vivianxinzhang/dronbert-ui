import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchBar from './TrackingBar';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
}));

const Front  = () => {

  const classes = useStyles();

  return <Grid container className={classes.root}>
    <Grid item>
      <SearchBar />
    </Grid>
  </Grid>

}

export default Front;
