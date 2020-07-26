import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 90,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  detailInfo: {
    fontSize: 30
  }
}));

const OrderDetail = (props) => {
  const classes = useStyles();
  const { orderDetail, orderNumber } = props;
  // console.log(orderNumber)
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {/*Order Detail: {orderDetail['orderNumber']}*/}
            <div className={classes.detailInfo}>
              Order Detail:
              <br />
              The current selected order is #{ orderNumber }
              {/*Name: {orderDetail['sender_name']}     Phone: {orderDetail['sender_phone']}    Email: {orderDetail['sender_email']}*/}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderDetail;
