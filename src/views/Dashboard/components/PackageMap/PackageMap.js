import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {},

}));

const PackageMap = props => {

  return (
          <img alt="map" src="/images/map.jpg" width="830" height="500"/>
  );
};

PackageMap.propTypes = {
  className: PropTypes.string
};

export default PackageMap;
