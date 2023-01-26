import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, bindActionCreators } from 'redux';
  
import * as actions from './actions';
import reducer from './reducer';


const store = createStore(reducer);

const { dispatch, subscribe, getState } = store;

const {inc, dec, rnd} =  bindActionCreators(actions, dispatch);


subscribe(() => {
    console.log('change store!', getState());
    document.getElementById('counter').textContent = getState().value;
});

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * (100 - 10) + 10);
    rnd(value);
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


