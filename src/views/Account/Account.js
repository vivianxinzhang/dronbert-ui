import React , {useState, useEffect}from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { AccountProfile, AccountDetails } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  }
}));

const Account = () => {
  const classes = useStyles();
  // we should get this information from login in the future
  const [profile, setProfile] = useState({
    user_id: 'test1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@devias.io',
    phoneNumber: '3529321352',
    primaryAddress: '343 Jefferson Ave, Apt 12',
    city:'San Francisco',
    zipCode:'94129',
  });

  function updateProfile(info) {
    setProfile(info);
  }

  console.log('profile-->', profile);

  return (
    <div className={classes.root}>
        <Grid
        container
        spacing={4}
      >
         <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <AccountProfile profile={profile}/>
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <AccountDetails profile={profile} updateProfile={updateProfile}/>
           </Grid>
       </Grid>
    </div>
  );
};

export default Account;
