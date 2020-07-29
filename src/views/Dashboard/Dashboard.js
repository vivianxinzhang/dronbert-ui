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
  
  console.log('dash selectedOrder->',selectedOrder)

  const toggleDetail = (event) => {
    setLoadingDetail(true);
    setShowDetail(event.target.checked)
  }

  const getOrderDetail = async () => {

    await axios.post('http://localhost:5000/detail', {
      order_id : 'abc',
    })
      .then(response => {
        console.log(response.data);
        setOrderDetail(response.data);
        setLoadingDetail(false);
      })
      .catch(error => console.log(error));
  }

  // get order detail as an effect of switching on showDetail
  useEffect(() => {
    if (showDetail === true) {
      getOrderDetail();
    }
  }, [showDetail])

  const toggleActive=(index) =>{
    setSelectedOrder(index);
  }

  //fetch active order list data
  useEffect(() => {
    console.log('useEffect called')
    axios.post('http://localhost:5000/activeorder',{
      user_id : 'abc'
    })
      .then(res => {
        console.log('res->',res)
        console.log('data->',res.data)
        setActiveOrderList(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  },[])

  //fetch tracking info
  useEffect(() => {
    // console.log('Tracking useEffect called')
    if(activeOrderList.length === 0) {return;}
    const tracking_id=activeOrderList[selectedOrder]['Tracking ID'];
    // console.log('tracking_id',tracking_id)
    axios.post('http://localhost:5000/tracking',{
      tracking_id : tracking_id
    })
      .then(res => {
        setTrackingInfo(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  },[selectedOrder,activeOrderList])


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

  console.log('trackingInfo dashboard -->', trackingInfo);
  const orderNumber = activeOrderList.length !== 0 ? activeOrderList[selectedOrder]['Tracking ID'] : undefined;
  const recipient = activeOrderList.length !== 0 ? activeOrderList[selectedOrder]['Recipient'] : undefined;
  const status = trackingInfo ? trackingInfo.status : undefined;
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
            <CardHeader title = "arrive in:"/>
            <Divider />
            <CardContent>
              <TimeStamp info={trackingInfo}/>
              <ActiveOrderList 
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
