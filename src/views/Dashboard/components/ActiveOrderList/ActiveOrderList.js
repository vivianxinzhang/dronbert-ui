// import React from 'react';
import React, {useState, useEffect} from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Button
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '10px 12px',
    border: '1px solid',
    lineHeight: 1,
    // backgroundColor: '#0063cc',
    // borderColor: '#0063cc',
    backgroundColor: '#7ccccc',
    borderColor: 'white',
    color: '#FFFFFF',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
      // color: '#FFFFFF'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      backgroundColor: '#0069d9',
    },
  },
})(Button);

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '140px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  }
}));

function ActiveOrderList(props) {

  const { className, toggleActive, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  return ( 
    <div>
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        style={{minHeight:65, overflow: 'auto'}}
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Active Order List:"
      />
      <Divider />

      {/* <FormGroup row> */}
      <FormGroup>
          {
            props.list.map((element,index) =>
              <BootstrapButton 
                key={index}
                onClick={() => { toggleActive(index) }}>{'Order# ' + element['Tracking ID'] + ', '+'send to '+element['Recipient'] }
              </BootstrapButton>)             
          // posts.map(post => <Button variant="contained" color="primary" key={post.id}>{post.name}</Button>)
          }
          
        </FormGroup>
    </Card>
    </div>
  );
}

ActiveOrderList.propTypes = {
  className: PropTypes.string
};

export default ActiveOrderList;
