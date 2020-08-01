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
    // height: 120,
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
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
            <br/>
            Total Cost: ${ orderDetail['total cost'] }
            <br/>
            Shipping Option: { orderDetail['machine_type']}
            <br/>
            Estimated Delivery Time: { orderDetail['delivered_at'] }
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Sender Info:
            <br/>
            <br/>
            Name: {orderDetail['sender_name']}
            <br/>
            Phone: {orderDetail['sender_phone']}
            <br/>
            Email: {orderDetail['sender_email']}
            <br/>
            Station: {orderDetail['sender_address']}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Recipient Info:
            <br/>
            <br/>
            Name: {orderDetail['recipient_name']}
            <br/>
            Phone: {orderDetail['recipient_phone']}
            <br/>
            Email: {orderDetail['recipient_email']}
            <br/>
            Address: {orderDetail['recipient_address']}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Package Info:
            <br/>
            <br/>
            Weight: {orderDetail['package_weight']}lbs
            <br/>
            Length: {orderDetail['package_length']}inches
            <br/>
            Height: {orderDetail['package_height']}inches
            <br/>
            Fragile: {(orderDetail['package_fragile'] && orderDetail['package_fragile'] == 1) ? 'Yes' : 'No'}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
