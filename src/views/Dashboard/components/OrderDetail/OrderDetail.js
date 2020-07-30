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

export default function OrderDetail(props) {
  const classes = useStyles();
  const { orderDetail } = props;

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
            Total Cost: { orderDetail['total cost'] }
            <br/>
            Shipping Option: { orderDetail['machine_type']}
            <br/>
            Estimated Delivery Time: { orderDetail['delivered_at'] }
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Sender Info:
            <br/>
            Name: {orderDetail['sender_name']}     Phone: {orderDetail['sender_phone']}    Email: {orderDetail['sender_email']}
            <br/>
            Station: {orderDetail['sender_address']}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Recipient Info:
            <br/>
            Name: {orderDetail['recipient_name']}     Phone: {orderDetail['recipient_phone']}    Email: {orderDetail['recipient_email']}
            <br/>
            Address: {orderDetail['recipient_address']}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Package Info:
            <br/>
            Length: {orderDetail['package_length']}     Weight: {orderDetail['package_weight']}      Height: {orderDetail['package_height']}   Fragile:{orderDetail['package_fragile']}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
