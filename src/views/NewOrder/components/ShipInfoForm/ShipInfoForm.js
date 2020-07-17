import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
]

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function ShipInfoForm(props) {
  const { handleChange } = props;

  const [senderAddress, setSenderAddress] = useState('');
  const [senderZip, setSenderZip] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [recipientZip, setRecipientZip] = useState('');
  const [fragile, setFragile] = useState(false);

  const [options, setOptions] = useState([{
    address: 'google',
    zip: '94025',
  }]);

  console.log('options -->', options);

 /* useEffect(() => {
    return () => { handleSubmit({
      senderAddress : senderAddress + ', CA, ' + senderZip,
    }) };
  }) */

  /* useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );
    setOptions(result);
  }, [senderAddress]); */

  async function getOptions(address) {
    if(!address) { return; }
    const response = await axios.post('http://localhost:5000/autocomplete',{
      address : address,
    });
    const data = response.data;
    console.log('data from /autocomplete -->', data);
    setOptions(data);
  }

  function handleAddressInput(event, value) {
    const address = value;
    setTimeout(() => { getOptions(address); }, 500);
  }

  console.log('senderAddress -->', senderAddress);

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
            id="senderFirstName"
            label="First name"
            name="senderFirstName"
            required
            onChange={(event) => {
              handleChange({senderFirstName : event.target.value});
            }}
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
            id="senderLastName"
            label="Last name"
            name="senderLastName"
            required
            onChange={(event) => {
              handleChange({senderLastName : event.target.value});
            }}
          />
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
        >
          <TextField
            autoComplete="phone-number"
            fullWidth
            id="senderLastName"
            label="Phone Number"
            name="senderLastName"
            required
            onChange={(event) => {
              handleChange({senderPhoneNumber : event.target.value});
            }}
          />
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
        >
          <TextField
            autoComplete="email"
            fullWidth
            id="senderEmail"
            label="Email"
            name="senderEmail"
            required
            onChange={(event) => {
              handleChange({senderEmail : event.target.value});
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Autocomplete
            id="senderAddress"
            style={{ width: 300 }}
            getOptionSelected={(option, value) => option.name === value.name }
            getOptionLabel={(option) => option.address ? option.address : ''}
            options={options}
            onChange={(event, value) => {
              setSenderAddress(value['address']);
              setSenderZip(value['zip']);
              handleChange({
                senderAddress: value['address'] + ' ,CA, ' + value['zip'],
              });
            }}
            onInputChange={handleAddressInput}
            renderInput={(params) => (
              <TextField
                {...params}
                label="senderAddress"
                InputProps={{
                  ...params.InputProps,
                }}
              />
            )}
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
            value={senderZip}
            onChange={(event) => {
              setSenderZip(event.target.value);
              handleChange({senderAddress : senderAddress + ', CA, ' + event.target.value});
            }}
          />
        </Grid>
      </Grid>
      <Typography
        gutterBottom
        variant="h6"
      >
        Recipient information
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
            id="recipientFirstName"
            label="First name"
            name="recipientFirstName"
            required
            onChange={(event) => {
              handleChange({recipientFirstName : event.target.value});
            }}
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
            id="recipientLastName"
            label="Last name"
            name="recipientLastName"
            required
            onChange={(event) => {
              handleChange({recipientLastName : event.target.value});
            }}
          />
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
        >
          <TextField
            autoComplete="phone-number"
            fullWidth
            id="recipientLastName"
            label="Phone Number"
            name="recipientLastName"
            required
            onChange={(event) => {
              handleChange({recipientPhoneNumber : event.target.value});
            }}
          />
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
        >
          <TextField
            autoComplete="email"
            fullWidth
            id="recipientEmail"
            label="Email"
            name="recipientEmail"
            required
            onChange={(event) => {
              handleChange({recipientEmail : event.target.value});
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Autocomplete
            id="recipientAddress"
            style={{ width: 300 }}
            getOptionSelected={(option, value) => option.name === value.name }
            getOptionLabel={(option) => option.address ? option.address : ''}
            options={options}
            onChange={(event, value) => {
              setRecipientAddress(value['address']);
              setRecipientZip(value['zip']);
              handleChange({
                recipientAddress: value['address'] + ' ,CA, ' + value['zip'],
              });
            }}
            onInputChange={handleAddressInput}
            renderInput={(params) => (
              <TextField
                {...params}
                label="recipientAddress"
                InputProps={{
                  ...params.InputProps,
                }}
              />
            )}
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
            value={recipientZip}
            onChange={(event) => {
              setRecipientZip(event.target.value);
              handleChange({recipientAddress : recipientAddress + ', CA, ' + event.target.value});
            }}
          />
        </Grid>
      </Grid>
      <Typography
        gutterBottom
        variant="h6"
      >
        Package information
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
            autoComplete="weight"
            fullWidth
            id="packageWeight"
            label="Weight"
            name="packageWeight"
            required
            onChange={(event) => {
              handleChange({packageWeight : event.target.value});
            }}
          />
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
        >
          <TextField
            autoComplete="length"
            fullWidth
            id="packageLength"
            label="Length"
            name="packageLength"
            required
            onChange={(event) => {
              handleChange({packageLength : event.target.value});
            }}
          />
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
        >
          <TextField
            autoComplete="width"
            fullWidth
            id="packageWidth"
            label="Width"
            name="packageWidth"
            required
            onChange={(event) => {
              handleChange({packageWidth : event.target.value});
            }}
          />
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
        >
          <TextField
            autoComplete="height"
            fullWidth
            id="packageHeight"
            label="Height"
            name="packageHeight"
            required
            onChange={(event) => {
              handleChange({packageHeight : event.target.value});
            }}
          />
        </Grid>
        <FormControlLabel

          control={
            <Checkbox
              color='secondary'
              checked={fragile}
              onChange={(event) => {
                setFragile(Boolean(event.target.checked));
                handleChange({
                  fragile: Boolean(event.target.checked),
                });
              }}
              name="fragile"/>
          }
          label="Fragile?"
          labelPlacement="start"
        />
      </Grid>

    </React.Fragment>
  );
}

export default ShipInfoForm;
