import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
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
    height: 130,
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  detailInfo: {
    height: 270,
    fontSize: 14
  }
}));

const OrderDetail = (props) => {
  const classes = useStyles();
  const { orderDetail, orderNumber } = props;
  console.log(orderNumber)
  console.log('orderDetail -> ', orderDetail)

  return (
    <div className={classes.root}>
      <Card className={classes.detailInfo}>
        <CardHeader title="Order Details" />
        <TableContainer>
          <Table >
            {/*<TableHead>*/}
            {/*  <TableRow>*/}
            {/*    <TableCell>  </TableCell>*/}
            {/*    <TableCell> Total Cost </TableCell>*/}
            {/*    <TableCell> Shipping Option </TableCell>*/}
            {/*  </TableRow>*/}
            {/*</TableHead>*/}
            <TableBody>
              <TableRow>
                <TableCell>
                  Order Number: { orderNumber }
                </TableCell>
                <TableCell>
                  Total Cost: ${ orderDetail['total cost'] }
                </TableCell>
                <TableCell>
                  Shipping Option: { orderDetail['machine_type']}
                </TableCell>
                <TableCell>
                  Delivered at: { orderDetail['delivered_at'] }
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <CardContent>
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
                Weight: {orderDetail['package_weight']} lbs
                <br/>
                Length: {orderDetail['package_length']} inches
                <br/>
                Height: {orderDetail['package_height']} inches
                <br/>
                Fragile: {(orderDetail['package_fragile'] && orderDetail['package_fragile'] == 1) ? 'Yes' : 'No'}
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default OrderDetail;
