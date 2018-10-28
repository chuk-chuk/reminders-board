import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReminderApp from './Application';
import Welcome from './pages/Welcome';
import Goodbye from './pages/Goodbye';
import MyAccount from './pages/MyAccount';

const Routes = () => {
    return (
        <ReminderApp>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/account" component={MyAccount} />
                    <Route path="/goodbye" component={Goodbye} />
                </Switch>
            </BrowserRouter>
        </ReminderApp>
    )
}

Routes.propTypes = {

}

export default Routes;