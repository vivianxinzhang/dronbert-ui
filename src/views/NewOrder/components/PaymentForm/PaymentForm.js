import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';

import StripeInput from './StripeInput'

const PaymentForm = () => {
  return (
    <React.Fragment>
      <Typography
        gutterBottom
        variant="h6"
      >
        Payment method
      </Typography>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            autoComplete="cc-name"
            fullWidth
            id="cardName"
            label="Name on card"
            required
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            label="Credit Card Number"
            name="ccnumber"
            required
            fullWidth
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardNumberElement
              },
            }}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            label="Expiration Date"
            name="ccexp"
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardExpiryElement
              },
            }}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            label="CVC"
            name="cvc"
            helperText='last three digit on signature strip'
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardCvcElement
              },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <FormControlLabel
            control={<Checkbox
              color="secondary"
              name="saveCard"
              value="yes"
            />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;
