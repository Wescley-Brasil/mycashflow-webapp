import React from 'react';
import PanelSection from "../contents/PanelSection.js"
export default class Overview extends React.Component{
    render(){
        return(
            <div>
                <PanelSection
                    title = "Resumo"
                />
                <PanelSection 
                    title ="Despesas Mensais"
                />
                <PanelSection 
                    title ="Contas a Pagar"
                />
                <PanelSection 
                    title ="Receitas e Recursos"
                />
            </div>
        );
    }

}
