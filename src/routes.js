import React from 'react';
import { Route, Switch } from 'react-router';

import ReminderApp from './Application';
import Welcome from './pages/Welcome';
import Goodbye from './pages/Goodbye';
import MyAccount from './pages/MyAccount';

const Routes = () => {
    return (
        <ReminderApp>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/account" component={MyAccount} />
                <Route path="/goodbye" component={Goodbye} />
            </Switch>
        </ReminderApp>
    )
}

Routes.propTypes = {

}

export default Routes;