
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './style.css'
// Ecmascript vs Javascript vs Node
// Ecmascript:  Syntax standard : ES5 ES6 ES7..
// Javascript: Ecmascript + WebAPI(DOM, fetch ...)
// Node: Ecmascript + NodeAPI(require, fs, crypto, http)
import { Provider} from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <App />
    </Provider>

);
