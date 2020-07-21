import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Button,
  Divider,
  CardActions,
} from '@material-ui/core';

import {
  ActiveOrderList,
  PackageMap,
  TimeStamp,
  TrackingBar,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
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

  return (
    <div className={classes.root}>
      <Grid
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
          <Card
          >
             <CardHeader
        title="Order#1"
      />
      <Divider />
            <CardContent className={classes.cardContent}>
              <TrackingBar />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <PackageMap />
            </CardContent>

      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View details {/*<ArrowRightIcon />*/}
        </Button>
      </CardActions>
          </Card>

        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <div>
            <TimeStamp />
            <ActiveOrderList />
          </div>
        </Grid>
        {/*<Grid*/}
        {/*  item*/}
        {/*  lg={4}*/}
        {/*  md={6}*/}
        {/*  xl={3}*/}
        {/*  xs={12}*/}
        {/*>*/}
        {/*  <ActiveOrderList />*/}
        {/*</Grid>*/}
      </Grid>
    </div>
  );
};

export default Dashboard;
