import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField, Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountDetails = props => {
  const { className, profile, updateProfile, ...rest  } = props;

  const classes = useStyles();

  const [values, setValues] = useState(profile);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const states = [
    {
      value: 'alabama',
      label: 'Alabama'
    },
    {
      value: 'new-york',
      label: 'New York'
    },
    {
      value: 'san-francisco',
      label: 'San Francisco'
    }
  ];

  console.log(values);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
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
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                margin="dense"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                margin="dense"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Primary address"
                margin="dense"
                name="primaryAddress"
                onChange={handleChange}
                required
                value={values.primaryAddress}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="city"
                margin="dense"
                name="city"
                onChange={handleChange}
                required
                value={values.city}
                variant="outlined"
              />
            </Grid>
            {/*<Grid*/}
            {/*  item*/}
            {/*  md={6}*/}
            {/*  xs={12}*/}
            {/*>*/}
            {/*  <TextField*/}
            {/*    fullWidth*/}
            {/*    label="Select State"*/}
            {/*    margin="dense"*/}
            {/*    name="state"*/}
            {/*    onChange={handleChange}*/}
            {/*    required*/}
            {/*    select*/}
            {/*    // eslint-disable-next-line react/jsx-sort-props*/}
            {/*    SelectProps={{ native: true }}*/}
            {/*    value={values.state}*/}
            {/*    variant="outlined"*/}
            {/*  >*/}
            {/*    {states.map(option => (*/}
            {/*      <option*/}
            {/*        key={option.value}*/}
            {/*        value={option.value}*/}
            {/*      >*/}
            {/*        {option.label}*/}
            {/*      </option>*/}
            {/*    ))}*/}
            {/*  </TextField>*/}
            {/*</Grid>*/}
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="zip-code"
                margin="dense"
                name="zipCode"
                onChange={handleChange}
                required
                value={values.zipCode}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              updateProfile(values);
              // we should post the updated profile information to /userprofile in the future
            }
            }
          >
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;
