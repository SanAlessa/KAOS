import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


