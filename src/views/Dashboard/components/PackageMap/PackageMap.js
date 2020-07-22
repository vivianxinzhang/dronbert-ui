import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import GMap from './GMap'

const useStyles = makeStyles(() => ({
  root: {
    height: 393,
    position: 'relative',
    margin: 'auto',
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const PackageMap = props => {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GMap />
    </div>
  );
};

PackageMap.propTypes = {
  className: PropTypes.string
};

export default PackageMap;
