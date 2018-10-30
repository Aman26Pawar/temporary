import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import Store  from './StudentManagement/storages/Store';
//import {persistor}  from './StudentManagement/storages/Store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(  
    <Provider store={Store.store}>
        <PersistGate loading={null} persistor={Store.persistor}>
            <App /> 
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);

