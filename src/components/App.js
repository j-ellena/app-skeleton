import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation'
import Home from './Home';
import RestApi from './RestApi';
import Hooks from './Hooks';
import Page404 from './Page404';

import { Frame, Container } from '@lightelligence/react';

const App = () => (

    <BrowserRouter>
        <Frame>
            <Navigation/>
            <Container>
                <Switch>
                   <Route exact path="/" component={Home} />
                   <Route path="/restapi" component={RestApi} />
                   <Route path="/hooks" component={Hooks} />
                   <Route component={Page404} />
                </Switch>
            </Container>
        </Frame>
    </BrowserRouter>

);

export default App;
