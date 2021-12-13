import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Wellcome from './pages/Wellcome';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import PassRecovery from './pages/PassRecovery';
import Home from './pages/Home';
import NovaCampanha from './pages/NovaCampanha';
import VerCampanha from './pages/VerCampanha';
import EditCampaing from './pages/EditCampaing'

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