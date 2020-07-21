import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { data, options } from './chart';
import GMap from './GMap'


const useStyles = makeStyles(() => ({
  root: {},

}));

const PackageMap = props => {

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      {/* <CardHeader
        action={
          <Button
            size="small"
            variant="text"
          >
            Last 7 days <ArrowDropDownIcon />
          </Button>
        }
        title="Latest Sales"
      />
      <Divider />*/}

      <CardContent>
        <div className={classes.chartContainer}>
          {/* <img alt="map" src="/images/map.jpg"/> */}
          <GMap></GMap>
        </div>
      </CardContent>

      {/*<Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          Overview <ArrowRightIcon />
        </Button>
      </CardActions> */}
    </Card>
  );
};

PackageMap.propTypes = {
  className: PropTypes.string
};

export default PackageMap;
