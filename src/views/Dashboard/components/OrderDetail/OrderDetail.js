import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    height: 397,
    position: 'relative',
    margin: 'auto',
    paddingTop: 0,
    paddingBottom: 0,
  },
  paper: {
    height: 120,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function OrderDetail() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Order Detail
            <br/>
            Total Cost:
            <br/>
            Shipping Option:
            <br/>
            Estimated Delivery Time:
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Sender Info:
            <br/>
            Name: xxxx     Phone: xxxx     Email: xxxx
            <br/>
            Address: xxxxxxxxxx
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Recipient Info:
            <br/>
            Name: xxxx     Phone: xxxx     Email: xxxx
            <br/>
            Address: xxxxxxxxxx
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Package Info:
            <br/>
            Length: xxxx     Weight: xxxx     Height: xxxx  Fragile:
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
