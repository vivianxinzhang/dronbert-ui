import React from 'react';
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
} from '@material-ui/core';

import {
  ActiveOrderList,
  PackageMap,
  TimeStamp,
  TrackingBar,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    height: '100%',
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
      <Grid
        container
        spacing={1}
        alignItems="stretch"
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
                  <PackageMap />
                </Grid>
              </Grid>
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
