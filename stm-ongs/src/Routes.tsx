import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Wellcome from './components/Pages/Wellcome';
import Login from './components/Pages/Login';
import Cadastro from './components/Pages/Cadastro';
import PassRecovery from './components/Pages/PassRecovery';
import Home from './components/Pages/Home';
import NovaCampanha from './components/Pages/NovaCampanha';
import VerCampanha from './components/Pages/VerCampanha';
import EditCampaing from './components/Pages/EditCampaing'

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Wellcome} exact />
                    <Route path="/sign-in" component={Login} />
                    <Route path="/sign-up" component={Cadastro} />
                    <Route path="/password-recovery" component={PassRecovery} />
                    <Route path="/home" component={Home} />
                    <Route path="/campaings" exact component={NovaCampanha} />
                    <Route path="/campaings/:id" component={VerCampanha} />
                    <Route path="/campaings-edit/:id" component={EditCampaing} />
                </Switch>
            </BrowserRouter>
        </>
    )
}