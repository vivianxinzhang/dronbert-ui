import React, { useState } from 'react';
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
} from '@material-ui/core';

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

  const [showDetail, setShowDetail] = useState(false);
  const [activeOrderList, setActiveOrderList] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(0);
  const [orderInfo, setOrderInfo] = useState(activeOrderList[selectedOrder]);

  const toggleDetail = (event) => {
    setShowDetail(event.target.checked)
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
              title="Order#1"
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
                  <TrackingBar />
                </Grid>
                <Grid
                  item
                  xl={12}
                >
                  {showDetail ? <OrderDetail />: <PackageMap />}
                </Grid>
              </Grid>
            </CardContent>

            <CardActions className={classes.actions}>
              <FormControlLabel
                control={<Switch
                  checked={showDetail}
                  color='secondary'
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
              <TimeStamp />
              <ActiveOrderList />
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
