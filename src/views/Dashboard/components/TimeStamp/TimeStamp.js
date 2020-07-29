import React, {useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Typography,
  CircularProgress,
  Box,
  Grid,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    justifyContent: 'center',
    height: 355
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  time: {
    margin: 'auto',
    fontSize: 'xx-large',
  }
}));

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        size={150}
        thickness={2}
        variant="static"
        {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >

        <Typography variant="h4" color="textSecondary">{
          `${Math.floor(props.timeleft/60)} hrs
          ${props.timeleft%60} mins`}</Typography>
      </Box>
    </Box>
  );
}

const TimeStamp = props => {
  const { info, className, ...rest } = props;
  const classes = useStyles();

  const deliveryTimeMS = Date.parse(info['estimated delivered time']);
  const currentTimeMS = Date.parse(new Date());
  const timeLeftMS = deliveryTimeMS - currentTimeMS;
  const hoursLeft = Math.floor(timeLeftMS / (1000 * 60 * 60) % 24);
  const minutesLeft = Math.floor(timeLeftMS / (1000 * 60) % 60);

  console.log('hours ', hoursLeft);
  console.log('minutes ', minutesLeft);

 /* React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((preTimeLeft) => (preTimeLeft - 10 <= 0 ? 0 : preTimeLeft - 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []); */

  return (
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          className={classes.chartContainer}
        >
          {/* <CircularProgressWithLabel value={100 - timeLeft/totalTime*100} timeleft={timeLeft}/>; */}
          <div className={classes.time}>{hoursLeft} hrs {minutesLeft} minutes</div>
        </Grid>
  );
};

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

TimeStamp.propTypes = {
  className: PropTypes.string
};

export default TimeStamp;

/* const options = {
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  cutoutPercentage: 80,
  layout: { padding: 0 },
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: theme.palette.divider,
    backgroundColor: theme.palette.white,
    titleFontColor: theme.palette.text.primary,
    bodyFontColor: theme.palette.text.secondary,
    footerFontColor: theme.palette.text.secondary
  }
};
*/
