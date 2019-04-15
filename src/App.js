import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//
import DashboardIcon from '@material-ui/icons/Dashboard'; 
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet'; 
import MoneyOff from '@material-ui/icons/MoneyOff'; 
import Ballot from '@material-ui/icons/Ballot'; 
import Description from '@material-ui/icons/Description';
import AccountBalance from '@material-ui/icons/AccountBalance';


import * as Commons from "./components/commonsStyles.js";
//
import Overview from "./components/pages/Overwiew.js";
import Bills from "./components/pages/Bills.js" 
import Spendings from './components/pages/Spendings.js';
import ComingSoon from './components/pages/Spendings.js';

class App extends React.Component {

    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        
        const { classes, theme } = this.props;
        const Pages = [
            <Overview/>,
            <Spendings />,
            <Bills />,
            <ComingSoon />

        ]
        const topToolBar = (
            <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
                [classes.appBarShift]: this.state.open,
            })}
            >
                <Toolbar disableGutters={!this.state.open}>
                    <IconButton
                    color="inherit"
                    aria-label="Expandir Menu"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, {
                        [classes.hide]: this.state.open,
                    })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        myCashFlow
                    </Typography>
                </Toolbar>
            </AppBar>
        )
        const sidebarMenu = (
            <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
            })}
            classes={{
                paper: classNames({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
                }),
            }}
            open={this.state.open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {
                        [
                            {categorie: 'Visão Geral', icon: <DashboardIcon />},
                            {categorie: 'Renda e Recursos', icon: <AccountBalanceWallet/>},
                            {categorie: 'Depesas', icon: <MoneyOff/> },
                            {categorie: 'Planejamento Mensal', icon: <Ballot/>},
                            {categorie: 'Contas e Faturas', icon: <Description/>},
                            {categorie: 'Dívidas', icon: <AccountBalance/>}
                            
                        ].map((item, index) => (
                        <ListItem button key={item.categorie}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.categorie} />
                        </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        );
        const content = (
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {Pages[2]}
            </main>
        );
        return (
        <div className={classes.root}>
            <CssBaseline />
            {topToolBar}
            {sidebarMenu}
            {content}
        </div>
        );
    }
}
App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Commons.styles, { withTheme: true })(App);

