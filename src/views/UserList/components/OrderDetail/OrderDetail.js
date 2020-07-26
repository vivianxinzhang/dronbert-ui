import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Table,
  TableCell,
  IconButton,
  Divider,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 150,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  detailInfo: {
    fontSize: 20
  }
}));

const OrderDetail = (props) => {
  const classes = useStyles();
  const { orderDetail, orderNumber } = props;
  console.log(orderNumber)
  console.log('orderDetail -> ', orderDetail)

  return (
    <div className={classes.root}>
      <Card>
        <CardHeader
          title="Order Details"
        />
        <CardContent>
          <div className={classes.chartContainer}>
            <Table >
              <TableCell>

              </TableCell>
            </Table>
            #{ orderNumber }  Total Cost: ${ orderDetail['total cost'] }
          </div>
        </CardContent>
        <Grid
          container
          alignItems="center"
          justify="center"
          spacing={0}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Sender Info:
              <br/>
              <br/>
              Name: {orderDetail['sender_name']}
              <br/>
              Phone: {orderDetail['sender_phone']}
              <br/>
              Email: {orderDetail['sender_email']}
              <br/>
              Address: {orderDetail['sender_address']}
            </Paper>
            {/*<Paper className={classes.paper}>Order Detail*/}
            {/*  <br/>*/}
            {/*  <br/>*/}
            {/*  Total Cost: { orderDetail['total cost'] }*/}
            {/*  <br/>*/}
            {/*  Shipping Option: { orderDetail['machine_type']}*/}
            {/*  <br/>*/}
            {/*  Estimated Delivery Time: { orderDetail['delivered_at'] }*/}
            {/*</Paper>*/}
          </Grid>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
            <Paper className={classes.paper}>Package Info:
              <br/>
              <br/>
              Length: {orderDetail['package_length']}
              <br/>
              Weight: {orderDetail['package_weight']}
              <br/>
              Height: {orderDetail['package_height']}
              <br/>
              Fragile:{orderDetail['package_fragile']}
            </Paper>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default OrderDetail;
