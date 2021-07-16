import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cadastro from '../Pages/Cadastro';
import CatalogoBiscoitos from '../Pages/CatalogoBiscoitos';
import Contato from '../Pages/Contato';
import EncomendaBiscoitos from '../Pages/EncomendaBiscoitos';
import Home from '../Pages/Home';

export default function Roteador() {
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/encomendas" component={EncomendaBiscoitos}/>
                    <Route path="/biscoitos" component={CatalogoBiscoitos}/>
                    <Route path="/cadastro" component={Cadastro}/>
                    <Route path="/contato" component={Contato}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}