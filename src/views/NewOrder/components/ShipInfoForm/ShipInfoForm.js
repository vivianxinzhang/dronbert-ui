import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
]

function ShipInfoForm() {

  const [senderAddress, setSenderAddress] = useState('');



  console.log(senderAddress);
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
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                autoComplete="shipping address-line1"
                fullWidth
                id="address1"
                label="Sender Address"
                name="senderAddress"
                required
                {...params}
                margin="normal"
                onChange={(e) => {setSenderAddress(e.target.value)}}
                value={senderAddress}
              />
            )}
          />
          <TextField
            autoComplete="shipping address-line1"
            fullWidth
            id="address1"
            label="Address line 1"
            name="address1"
            required
          />
        </Grid>

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
