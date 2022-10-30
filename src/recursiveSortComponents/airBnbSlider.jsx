import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};






function AirbnbThumbComponent(props) {
    return (
        <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
    );
}

export default function CustomizedSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography gutterBottom>Airbnb</Typography>
            <AirbnbSlider
                ThumbComponent={AirbnbThumbComponent}
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                defaultValue={[20, 40]}
                valueLabelDisplay="on"
            />
        </div>
    );
}
