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
}));

const OrderDetail = (props) => {
  const classes = useStyles();
  const { orderDetail, orderNumber } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {/*Order Detail: {orderDetail['orderNumber']}*/}
            Order Detail: { orderNumber }
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderDetail;
