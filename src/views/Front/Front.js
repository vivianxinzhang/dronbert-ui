import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TrackingBar from './TrackingBar';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 'auto',
    height: 760,
    // height: '100vh',  // this height also works
    backgroundImage:'url(images/golden_gate_bridge_drone.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}));

const Front  = (props) => {

  const { history } = props;
  const classes = useStyles();

  return <Grid container className={classes.root}>
      <Grid item>
        <TrackingBar history={history}/>
      </Grid>
    </Grid>
}

export default Front;
