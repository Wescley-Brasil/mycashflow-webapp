import React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import * as Commons from "../commonsStyles.js" 
class PanelSection extends React.Component{
    render(){
        const classes = this.props;
        return(
            <div className={classes.root}>
                <Grid container  spacing={16} >
                    <Grid item xs={12}>
                        <Typography variant = "h5">
                            {this.props.title}
                        </Typography>
                        <br/>
                        <Paper className={classes.paper}>em Breve!</Paper>
                        <br/>
                        <Divider/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(Commons.styles, { withTheme: true })(PanelSection)