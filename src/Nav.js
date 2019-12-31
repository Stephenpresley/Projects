import React, {useState} from 'react';
import PropTypes, { func } from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {
    makeStyles, useTheme, AppBar, Tabs, Tab, Typography, Box
} from '@material-ui/core';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component='div'
            role='tabpanel'
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
}));

export default function Nav() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0)

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

        return (
            <div className={classes.root}>
                <AppBar position='static' color='default'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor='primary'
                        textColor='primary'
                        variant='fullWidth'
                    >
                        <Tab href='/' label='Home' {...a11yProps(0)} />
                        <Tab href='/about' label='About' {...a11yProps(1)} />
                        <Tab href='/favorites' label='Favorites' {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                {/* <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/favorites'>Favorites</Link> */}
            </div>
        );
}