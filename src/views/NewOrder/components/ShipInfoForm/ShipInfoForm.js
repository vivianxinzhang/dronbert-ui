import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const ShipInfoForm = () => {
  return (
    <React.Fragment>
      <Typography
        gutterBottom
        variant="h6"
      >
        Sender information
      </Typography>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          sm={6}
          xs={12}
        >
          <TextField
            autoComplete="given-name"
            fullWidth
            id="firstName"
            label="First name"
            name="firstName"
            required
          />
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
        >
          <TextField
            autoComplete="family-name"
            fullWidth
            id="lastName"
            label="Last name"
            name="lastName"
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField
            autoComplete="shipping address-line1"
            fullWidth
            id="address1"
            label="Address line 1"
            name="address1"
            required
          />
        </Grid>
        {/*<Grid
          item
          xs={12}
        >
          <TextField
            autoComplete="shipping address-line2"
            fullWidth
            id="address2"
            label="Address line 2"
            name="address2"
          />
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
        >
          <TextField
            autoComplete="shipping address-level2"
            fullWidth
            id="city"
            label="City"
            name="city"
            required
          />
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
        >
          <TextField
            fullWidth
            id="state"
            label="State/Province/Region"
            name="state"
          />
        </Grid> */ }
        <Grid
          item
          sm={6}
          xs={12}
        >
          <TextField
            autoComplete="shipping postal-code"
            fullWidth
            id="zip"
            label="Zip / Postal code"
            name="zip"
            required
          />
        </Grid>
        {/* <Grid
          item
          sm={6}
          xs={12}
        >
          <TextField
            autoComplete="shipping country"
            fullWidth
            id="country"
            label="Country"
            name="country"
            required
          />
        </Grid> */}
        <Grid
          item
          xs={12}
        >
          <FormControlLabel
            control={<Checkbox
              color="secondary"
              name="saveAddress"
              value="yes"
            />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ShipInfoForm;
