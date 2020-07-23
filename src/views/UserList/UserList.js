import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable, OrderDetail } from './components';
import mockData from './data';
// import { number } from 'prop-types';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();
  const [users] = useState(mockData);
  const [orderDetail, setOrderDetail] = useState({
    orderNumber: 23432423,
    senderFirstName: 'Jack',
    senderLastName: 'Chan',
    senderAddress: '1600 Amphitheatre Parkway, Mountain View, CA, 94043',
    senderPhoneNumber: '1111111111',
    senderEmail: 'jack@gmail.com',
    recipientFirstName: 'Jeff',
    recipientLastName: 'Car',
    recipientAddress: '1 Hacker Way, Menlo Park, CA, 94025',
    recipientPhoneNumber: '2222222222',
    recipientEmail: 'jeff@gmail.com',
    packageWeight : '10',
    packageHeight : '10',
    packageLength : '10',
    packageWidth : '10',
  });
  // transfer order number between sibling component
  const [ orderNumber, setOrderNumber ] = useState(mockData[0].orderID);
  const handleSelect = number => {
    setOrderNumber(number)
  };
  console.log(orderNumber);

  useEffect(() => {
    setOrderDetail();

  }, null )

  // const setOrderDetail = async () => {
  //   await axios.post( 'http://localhost:5000/neworder', {
    //   "senderFisrtName": orderInfo['senderFisrtName'],
    //   "senderLastName": orderInfo['senderLastName'],
    //   "senderAddress": orderInfo['senderAddress'],
    //   "senderPhoneNumber": orderInfo['senderPhoneNumber'],
    //   "senderEmail": orderInfo['senderEmail'],
    //   "recipientFisrtName": orderInfo['recipientFisrtName'],
    //   "recipientLastName": orderInfo['recipientLastName'],
    //   "recipientAddress": orderInfo['recipientAddress'],
    //   "recipientPhoneNumber": orderInfo['recipientPhoneNumber'],
    //   "recipientEmail": orderInfo['recipientEmail'],
    //   "packageWeight" : orderInfo['packageWeight'],
    //   "packageHeight" : orderInfo['packageHeight'],
    //   "packageLength" : orderInfo['packageLength'],
    //   "packageWidth" : orderInfo['package-width'],
    //   "carrier" : orderInfo['solution']['carrier'],
    //   "totalCost" : orderInfo['solution']['price'],
    //   "deliveryTime": orderInfo['solution']['time'].concat('hr'),
    //   "fragile": orderInfo['fragile'],
    // })
      // .then((response) => {
      //   console.log('response from /neworder -->', response.data);
      //   const trackingID = response.data['tracking id'];
      //   if(trackingID) {
      //     handleChange({
      //       trackingID : trackingID,
      //     });
      //   }
      // })
      // .catch(error => {
      //   console.log(error);
      // });
  // }

  return (
    <div className={classes.root}>
      <div>
        {/*<OrderDetail orderDetail = {orderDetail}/>*/}
        <OrderDetail orderNumber = {orderNumber}/>
      </div>
      {/*<UsersToolbar />*/}
      <div className={classes.content}>
        <UsersTable users={users} handleSelect = { handleSelect }/>
      </div>
    </div>
  );
};

export default UserList;
