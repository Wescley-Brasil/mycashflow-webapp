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
import TextField from '@material-ui/core/TextField';

import DashboardIcon from '@material-ui/icons/Dashboard' 
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet' 
import MoneyOff from '@material-ui/icons/MoneyOff' 
import Ballot from '@material-ui/icons/Ballot' 
import Description from '@material-ui/icons/Description' 
import AccountBalance from '@material-ui/icons/AccountBalance' 

import * as Commons from "./components/commonsStyles.js" 
import './formulario.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class App extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      title: 'React Simple Crud APP',
      act: 0,
      index : '',
      datas : []
    };
  }


  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;
    let data_pagamento = this.refs.data_pagamento.value;
    let meio_pag = this.refs.meio_pag.value;
    let valor = this.refs.valor.value;

    if(this.state.act === 0){   //new
      let data = {
        name, address,data_pagamento,meio_pag,valor
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
      datas[index].data_pagamento = data_pagamento;
      datas[index].meio_pag = meio_pag;
      datas[index].valor = valor;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
  }


  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;
    this.refs.data_pagamento.value = data.data_pagamento;
    this.refs.meio_pag.value = data.meio_pag;
    this.refs.valor.value = data.valor;

    this.setState({
      act: 1,
      index: i
    });

   
  } 


  ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }





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
        let datas = this.state.datas;
        const { classes, theme } = this.props;
        const title = (
          <h3></h3>
        )
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
               
                <Typography variant = "h5" >Despesas Mensais</Typography>
                <form ref="myForm" className="myForm">
                  <Grid container spacing={6}>
                    <Grid item xs={6}>
                      <label>Descricao</label>
                      <input type="text" ref="name" className="formField" />
                    </Grid>
                    <Grid item xs={6}>
                      <label>Endereco</label>
                      <input type="text" ref="address" className="formField" />
                    </Grid>
                    <Grid item xs={6}>
                      <label>Meio pagamento</label>
                      <input type="text" ref="meio_pag" className="formField" />
                    </Grid>
                    <Grid item xs={6}>
                      <label>Valor</label>
                      <input type="text" ref="valor" className="formField" />
                    </Grid>
                    <Grid item xs={6}>
                      <label>Data de Pagamento</label>
                      <input type="date" ref="data_pagamento" className="formField" />
                    </Grid>
 
                    <Grid item xs={12}>
                     <button onClick={(e)=>this.fSubmit(e)} className="myButton">Adicionar </button>
                    </Grid>
                </Grid>
                  
              </form>
 
              <pre>
                {datas.map((data,i) => 
                    <li key={i} className='myList'>
                    {i+1}. {data.name} {data.address} {data.data_pagamento} {data.meio_pag} {data.valor} 
      


                    <button onClick={()=>this.fRemove(i)} className="myListButton">Remover </button>
                    <button onClick={()=>this.fEdit(i)} className="myListButton">Editar </button>
                  </li>
            )}
          </pre>
      
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

