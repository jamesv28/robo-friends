import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {searchRobots} from './reducers/reducers';
import {createLogger} from 'redux-logger';
import './index.css';
import App from './App';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
