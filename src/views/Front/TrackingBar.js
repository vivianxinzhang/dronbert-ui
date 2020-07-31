import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setValue(event.target.value);
  }

  const handleSubmit = () => {
    console.log('submit value -->', value);
  }

  return (
    <Paper className={classes.root}>
      <InputBase
        name='search input'
        className={classes.input}
        onChange={handleChange}
        placeholder="Search Your Package with Order Number"
      />
      <IconButton
        onClick={handleSubmit}
        className={classes.iconButton}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
