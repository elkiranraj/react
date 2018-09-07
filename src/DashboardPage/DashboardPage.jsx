import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { userActions } from '../_actions';
import DashboardMenu from './DashboardMenu';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


class DashboardPage extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            {/* <MenuIcon /> */}
                            <DashboardMenu />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Dashboard
                        </Typography>
                        <Link to="/login">
                            <Button color="inherit">Logout</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


const styledDashboardPage = withStyles(styles)(DashboardPage);
export { styledDashboardPage as DashboardPage };