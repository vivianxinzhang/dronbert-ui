import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersTable, OrderDetail } from './components';
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
  console.log(orderDetail);

  // transfer order number between sibling component
  const [ orderNumber, setOrderNumber ] = useState(mockData[0].orderID);
  const handleSelect = number => {
    setOrderNumber(number);
    getOrderDetail();
  }
  // console.log(orderNumber);

  const [ orderHistory, setOrderHistory ] = useState([]);
  useEffect(() => {
    // setOrderDetail();
    // setOrderNumber();
    console.log('useEffect called')
    setOrderHistory();
    setOrderDetail();
    // window.addEventListener('load', getOrderHistory());
    getOrderHistory();  // need fix: Promise returned from getOrderHistory is ignored
  }, [])
  console.log(orderHistory);

  const getOrderDetail = async () => {
    axios.post('http://localhost:5000/detail', {
      order_id : 'abc',
    })
      .then(response => {
        console.log(response.data);
        setOrderDetail(response.data);
      })
      .catch(error => console.log(error));
  }

  async function getOrderHistory() {
    axios.post('http://localhost:5000/history', {
      user_id : 'abc',
    })
      .then(response => {
        console.log(response.data);
        setOrderHistory(response.data);
      })
      .catch(error => console.log(error));
  }

  // const getOrderHistory = async () => {
  //   axios.post('http://localhost:5000/history', {
  //     user_id : 'abc',
  //   })
  //     .then(response => {
  //       console.log(response.data);
  //       setOrderHistory(response.data);
  //     })
  //     .catch(error => console.log(error));
  // }

  return (
    <div className={classes.root}>
      <div>
        {/*<OrderDetail orderDetail = {orderDetail}/>*/}
        <OrderDetail orderNumber = {orderNumber}/>
      </div>
      {/*<UsersToolbar />*/}
      <div className={classes.content}>
        <UsersTable
          users={users}
          orderhistory = { orderHistory }
          handleSelect = { handleSelect }
          getOrderDetail = { getOrderDetail }
        />
      </div>
    </div>
  );
};

export default UserList;
