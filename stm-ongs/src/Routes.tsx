import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Wellcome from './components/Pages/Wellcome';
import Login from './components/Pages/Login';
import Cadastro from './components/Pages/Cadastro';
import PassRecovery from './components/Pages/PassRecovery';

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Wellcome} exact/>
                    <Route path="/sign-in" component={Login}/>
                    <Route path="/sign-up" component={Cadastro}/>
                    <Route path="/password-recovery" component={PassRecovery} />
                </Switch>
            </BrowserRouter>
        </>
    )
}