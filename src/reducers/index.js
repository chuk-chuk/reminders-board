import { combineReducers } from 'redux';

import users from './users';
import reminders from './reminders';

export default combineReducers({
    users,
    reminders
});