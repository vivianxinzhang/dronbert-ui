import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Divider, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const stationOptions = [
  'Sunset/Parkside',
  'Mission District',
  'Excelsior',
]

const Checkout = (props) => {
  const classes = useStyles();
  const { orderInfo } = props;
  const { solution } = props.orderInfo;
  return (
    <React.Fragment>
      <Grid container spacing={2}>

        <Grid item xs={12}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="h5"
          >
            Sender Information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="h6"
          >
            Name : {orderInfo['senderFirstName'] + ' ' + orderInfo['senderLastName']}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            gutterBottom
            variant="h6"
          >
          Email: {orderInfo['senderEmail']}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            gutterBottom
            variant="h6"
          >
          Phone: {orderInfo['senderPhoneNumber']}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="h6"
          >
          Address: {orderInfo['senderAddress']}
          </Typography>
        </Grid>
        <Grid item xs={12}><Divider/></Grid>
      </Grid>
        </Grid>
      <Divider />

      <Grid item xs={12}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="h5"
          >
            Recipient Information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="h6"
          >
            Name : {orderInfo['recipientFirstName'] + ' ' + orderInfo['recipientLastName']}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            gutterBottom
            variant="h6"
          >
            Email: {orderInfo['recipientEmail']}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            gutterBottom
            variant="h6"
          >
            Phone: {orderInfo['recipientPhoneNumber']}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="h6"
          >
            Address: {orderInfo['recipientAddress']}
          </Typography>
          <Grid item xs={12}><Divider/></Grid>
        </Grid>
      </Grid>
      </Grid>

      <Grid item xs={12}>
      <Grid container justify='space-between' spacing={1}>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="h5"
          >
            Package Information
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            gutterBottom
            variant="h6"
          >
            Weight : {orderInfo['packageWeight']} lbs
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            gutterBottom
            variant="h6"
          >
            Length: {orderInfo['packageLength']} inches
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            gutterBottom
            variant="h6"
          >
            Width: {orderInfo['packageWidth']} inches
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            gutterBottom
            variant="h6"
          >
            Height: {orderInfo['packageHeight']} inches
          </Typography>
        </Grid>
        <Grid item xs={12}><Divider/></Grid>
      </Grid>
      </Grid>

        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="h5"
              >
                Selected Solution
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                gutterBottom
                variant="h6"
              >
                Carrier: {solution['carrier']}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                gutterBottom
                variant="h6"
              >
                Cost : ${solution['price']}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                gutterBottom
                variant="h6"
              >
                Dispatch within: {solution['dispatch within: ']}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                gutterBottom
                variant="h6"
              >
                Station: {stationOptions[Number(orderInfo['station']) - 1]}
              </Typography>
            </Grid>
            <Grid item xs={12}><Divider/></Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Checkout;
