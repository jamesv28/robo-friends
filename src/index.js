import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {searchRobots, requestRobots} from './reducers/reducers';
import {createLogger} from 'redux-logger';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';
import App from './App';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({searchRobots, requestRobots});
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

reportWebVitals();
