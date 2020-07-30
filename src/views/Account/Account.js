import React , {useState, useEffect}from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { AccountProfile, AccountDetails } from './components';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  }
}));

const Account = () => {
  const classes = useStyles();

  const user_id = localStorage.getItem('userID');
  const [profile, setProfile] = useState({
    user_id: '',
    firstName: '',
    lastName: '',
    primaryAddress: '',
    city: '',
    zipCode: '',
  });

  // we should get this information from login in the future

  useEffect(() => {
    axios.post('http://localhost:5000/login', {
      "user_id": user_id,
      "password": "1111",
    })
      .then((response) => {
        const data = response.data;
        console.log(data);
        // this should be replaced with token in the future
        if (data.status === 'OK') {
          localStorage.setItem('userID', data.user_id);
        }

        //parse address and zip
        const locationInfo = data['primary_address'];
        let index;
        for (let i = locationInfo.length - 1; i >= 0; i--) {
          if (locationInfo[i] === ' ') {
            index = i;
            break
          }
        }
        const zipCode = locationInfo.slice(index + 1);
        const address = data['primary_address'].slice(0, index);
        console.log('address-->', address);
        console.log('zipCode-->', zipCode);
        setProfile({
          user_id: data['user_id'],
          firstName: data['first_name'],
          lastName: data['last_name'],
          primaryAddress: address,
          city: 'San Fransisco',
          zipCode: zipCode,
        });
      })
  }, [])

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
