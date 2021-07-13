import React from 'react';

import {Route, Switch } from 'react-router-dom';
 
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

export default function  Routes() {
    return (
       
        <Switch>
            <Route path="/"  exact componemt={Login} />
            <Route path="/cadastro" componemt={Cadastro} />
            
        </Switch>
      
    );
}
