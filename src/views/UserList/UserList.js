import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable, OrderDetail } from './components';
import mockData from './data';
import { number } from 'prop-types';

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
  const [ orderNumber, setOrderNumber ] = useState(mockData[0].orderID);

  const handleSelect = number => {
    setOrderNumber(number)
  };

  console.log(orderNumber);
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
