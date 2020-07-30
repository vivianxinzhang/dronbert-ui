import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Button,
  Divider,
  CardActions,
  FormControlLabel,
  Switch,
  CircularProgress
} from '@material-ui/core';

import axios from 'axios';

import {
  ActiveOrderList,
  PackageMap,
  TimeStamp,
  TrackingBar,
  OrderDetail,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    height: '75%',
  },
  cardContent: {
    justifyContent: 'center',
  },
  actions: {
    justifyContent: 'flex-end',
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const [loadingDetail, setLoadingDetail] = useState(false);

  const [showDetail, setShowDetail] = useState(false);
  const [activeOrderList, setActiveOrderList] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(0);
  const [trackingInfo, setTrackingInfo] = useState({});
  const [orderDetail, setOrderDetail] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());
  
  console.log('dash selectedOrder->',selectedOrder);
  console.log('dash trackingInfo->', trackingInfo);

  const toggleDetail = (event) => {
    setLoadingDetail(true);
    setShowDetail(event.target.checked)
  }

  const getOrderDetail = async () => {

    await axios.post('http://localhost:5000/detail', {
      order_id : activeOrderList[selectedOrder]['Order ID'],
    })
      .then(response => {
        console.log(response.data);
        setOrderDetail(response.data);
        setLoadingDetail(false);
      })
      .catch(error => console.log(error));
  }

  // set a timer to record time for this page; update once per minute
  useEffect(() => {
    const timer = setInterval(() => {
     // console.log(new Date());
      setCurrentTime(new Date());
    }, 2 * 1000);
    return () => clearInterval(timer);
  }, [])

  // get order detail as an effect of switching on showDetail
  useEffect(() => {
    console.log(showDetail);
    if (showDetail === true) {
      getOrderDetail();
    }
  }, [showDetail, selectedOrder])

  const toggleActive=(index) =>{
    setSelectedOrder(index);
  }

  //fetch active order list data
  useEffect(() => {
    console.log('useEffect called')
    axios.post('http://localhost:5000/activeorder',{
      user_id : 'test1',
    })
      .then(res => {
      //  console.log('res->',res)
      //  console.log('data->',res.data)
        const orderArraySorted = res.data.sort(
          (a, b) => Date.parse(b['Order Date']) - Date.parse(a['Order Date'])
        );
        console.log(orderArraySorted);
        setActiveOrderList(orderArraySorted);
      })
      .catch(err =>{
        console.log(err)
      });
  }, []);

  //fetch tracking info
 const getTrackingInfo = async () => {
   if(activeOrderList.length === 0 || showDetail === true) {return;}
   const tracking_id=activeOrderList[selectedOrder]['Tracking ID'];
   // console.log('tracking_id',tracking_id)
   await axios.post('http://localhost:5000/tracking',{
     tracking_id : tracking_id
   })
     .then(res => {
       setTrackingInfo(res.data)
     })
     .catch(err =>{
       console.log(err)
     });
   console.log('trackingInfo -->', trackingInfo);
  }

  useEffect(() => {
    // console.log('Tracking useEffect called')
    getTrackingInfo();
  },[selectedOrder,activeOrderList, currentTime])

  const renderOrderDetail = () => {
    console.log(loadingDetail);
    console.log(orderDetail);
    if (activeOrderList.length === 0) {
      return <span> You don't have any active orders! </span>;
    }
    if (loadingDetail) {
      return <CircularProgress color="secondary" />;
    }
    return <OrderDetail orderDetail={orderDetail}/>;
  }

 // console.log('activeOrderList -->', activeOrderList);

  const orderNumber = activeOrderList.length !== 0 ? activeOrderList[selectedOrder]['Tracking ID'] : undefined;
  const recipient = activeOrderList.length !== 0 ? activeOrderList[selectedOrder]['Recipient'] : undefined;
  const status = trackingInfo ? trackingInfo.status : undefined;

  const deliveryTimeMS = Date.parse(trackingInfo['estimated delivered time']);
  const currentTimeMS = Date.parse(currentTime);
  const timeLeftMS = deliveryTimeMS - currentTimeMS;
  const timeLeft = {
    hours: Math.floor(timeLeftMS / (1000 * 60 * 60) % 24),
    minutes: Math.floor(timeLeftMS / (1000 * 60) % 60),
  }

  return (
    <Grid
      alignItems="stretch"
      container
      spacing={1}
    >
      <Grid
        item
        lg={8}
        md={12}
        xl={9}
        xs={12}
      >
        <Box className={classes.root}>
          <Card >
            <CardHeader
              style={{ textAlign: 'center' }}
              title={ !trackingInfo ? `Loading ...` :
                `Your package #${orderNumber} to ${recipient} is ${status}`}
            />
            <Divider />
            <CardContent className={classes.cardContent}>
              <Grid
                container
                direction="column"
              >
                <Grid
                  item
                  xl={12}
                >
                  <TrackingBar info={trackingInfo}/>
                </Grid>
                <Grid
                  item
                  xl={12}
                >
                  {showDetail ? renderOrderDetail(): <PackageMap info={trackingInfo}/>}
                </Grid>
              </Grid>
            </CardContent>

            <CardActions className={classes.actions}>
              <FormControlLabel
                control={<Switch
                  checked={showDetail}
                  color="secondary"
                  onChange={toggleDetail}
                  name="checkedA" />}
                label="View Detail"
              />
            </CardActions>
          </Card>
        </Box>
      </Grid>

      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Box className={classes.root}>
          <Card>
            <CardHeader title = "arrive in:"
             style={{maxHeight: 150, overflow: 'auto'}}
             />
            <Divider />
            <CardContent className={classes.cardContent}>
              <TimeStamp time={timeLeft}/>
              <ActiveOrderList 
                style={{maxHeight:180, overflow: 'auto'}}
                list={activeOrderList}
                selected={selectedOrder}
                toggleActive={toggleActive}
              />
            </CardContent>
            <CardActions>
              <Button
                color="primary"
                size="small"
                variant="text"
              >
                View all history {/*<ArrowRightIcon />*/}
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>

    </Grid>
  );
};

export default Dashboard;
