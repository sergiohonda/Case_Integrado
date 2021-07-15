import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListaBiscoitos from '../Pages/EncomendaBiscoitos';
import Home from '../Pages/Home';

export default function Roteador() {
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/encomendas" component={ListaBiscoitos}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}