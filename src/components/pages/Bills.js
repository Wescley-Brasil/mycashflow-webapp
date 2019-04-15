import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import MUIDataTable from "mui-datatables";

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        
        
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

const tableColumns = [
    "Descrição",
    "Data de Vencimento",
    "Data de Pagamento",
    "Categoria",
    "Valor"
]
const data = []

const tableOptions = {
    download: false,
    print: false,
    filter: false,
    viewColumns: false,
    selectableRows: false
}
class Bills extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <div>
                    <Typography variant = "h5" >Contas/Faturas</Typography>
                    <form className={classes.container} >
                        <Grid container>
                            <Grid item >
                                <TextField 
                                    id="filled-name"
                                    label = "Descrição"
                                    className={classes.textField}
                                    type = "text"
                                    margin="normal"
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item >
                                <TextField
                                    id="filled-full-width"
                                    label="Data Vencimento"
                                    placeholder="Placeholder"
                                    type = "date"
                                    margin="normal"
                                    variant="filled"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item >
                                <TextField
                                    id="filled-full-width"
                                    label="Data Pagamento"
                                    placeholder="Placeholder"
                                    type = "date"
                                    margin="normal"
                                    variant="filled"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                            </Grid>
                            <Grid item >
                                <TextField 
                                    id="filled-name"
                                    label = "Categoria"
                                    className={classes.textField}
                                    type = "text"
                                    margin="normal"
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item >
                                <TextField 
                                    id="filled-name"
                                    label = "Valor"
                                    className={classes.textField}
                                    type = "text"
                                    margin="normal"
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item >
                                <Fab
                                    className={classes.fab}
                                >
                                    <AddIcon />
                                </Fab>
                            </Grid>
                            
                        </Grid>
                    </form>

                </div>
                <div>
                    <MUIDataTable
                        title = "Tabela de Contas/Faturas"
                        data={data}
                        columns={tableColumns}
                        options = {tableOptions}

                        
                    />
                </div>
            </div>
        );
    }
}

Bills.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bills)