import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Wellcome from './components/Wellcome';
import Login from './components/Login';

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Wellcome} exact/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}