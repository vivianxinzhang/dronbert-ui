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
    <Box
      display="inline-flex"
      position="relative"
    >
      <CircularProgress
        size={150}
        thickness={2}
        variant="static"
        {...props}
      />
      <Box
        alignItems="center"
        bottom={0}
        display="flex"
        justifyContent="center"
        left={0}
        position="absolute"
        right={0}
        top={0}
      >

        <Typography
          color="textSecondary"
          variant="h4"
        >{
            `${Math.floor(props.timeleft/60)} hrs
          ${props.timeleft%60} mins`}</Typography>
      </Box>
    </Box>
  );
}

const TimeStamp = props => {
  const { time, className, ...rest } = props;
  const classes = useStyles();

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
    style={{height: 250, overflow: 'auto'}}
      alignItems="center"
      className={classes.chartContainer}
      container
      justify="center"
      spacing={0}
    >
      {/* <CircularProgressWithLabel value={100 - timeLeft/totalTime*100} timeleft={timeLeft}/>; */}
      {
        isNaN(time.hours) || isNaN(time.minutes) ?
          <div className={classes.time}> Delivery time will be available after the package is dispatched</div> :
          <div className={classes.time}>{time.hours} hrs {time.minutes} minutes</div>
      }
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
