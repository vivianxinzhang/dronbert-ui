import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
            autoComplete="cc-number"
            fullWidth
            id="cardNumber"
            label="Card number"
            required
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            autoComplete="cc-exp"
            fullWidth
            id="expDate"
            label="Expiry date"
            required
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            autoComplete="cc-csc"
            fullWidth
            helperText="Last three digits on signature strip"
            id="cvv"
            label="CVV"
            required
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
