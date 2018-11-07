import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReminderApp from './Application';
import Welcome from './pages/Welcome';
import MyAccount from './pages/MyAccount';

const Routes = () => {
    return (
        <ReminderApp>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/account" component={MyAccount} />
                </Switch>
            </BrowserRouter>
        </ReminderApp>
    )
}

Routes.propTypes = {

}

export default Routes;