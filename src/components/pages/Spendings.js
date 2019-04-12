import React from 'react';
import Typography from '@material-ui/core/Typography';
import './formulario.css';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
class Spendings extends React.Component{
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
    render(){
        let datas = this.state.datas;
        return(
            <div>
                <Typography variant = "h5" >Gastos</Typography>
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
            </div>
        );
    }
}

Spendings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Spendings;