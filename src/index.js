import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import { supportsHistory } from 'history/DOMUtils';
// import createHistory from 'history/createBrowserHistory';
// import createHashHistory from 'history/createHashHistory';

import Routes from './routes';
import configureStore from './configureStore';

import './styles.scss';

// const history = supportsHistory() ? createHistory() : createHashHistory();

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <Routes store={store}/>
    </ Provider>, 
    document.getElementById('root')
);

