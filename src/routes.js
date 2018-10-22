import React from 'react';
import { Route, Switch } from 'react-router';

import ReminderApp from './Application';
import Welcome from './pages/Welcome';
import Goodbye from './pages/Goodbye';

const Routes = () => {
    return (
        <ReminderApp>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/goodbye" component={Goodbye} />
            </Switch>
        </ReminderApp>
    )
}

Routes.PropTypes = {

}

export default Routes;