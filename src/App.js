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



import DashboardIcon from '@material-ui/icons/Dashboard' 
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet' 
import MoneyOff from '@material-ui/icons/MoneyOff' 
import Ballot from '@material-ui/icons/Ballot' 
import Description from '@material-ui/icons/Description' 
import AccountBalance from '@material-ui/icons/AccountBalance' 

import * as Commons from "./components/commonsStyles.js" 


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
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                    elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                    hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
                    velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
                    Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
                    viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
                    Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
                    at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                    ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
                    sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
                    In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
                    sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
                    viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
                    ultrices sagittis orci a.
                </Typography>
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