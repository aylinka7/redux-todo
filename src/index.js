import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux"
import allReducers from "./store/redusers";
import {Provider} from "react-redux"
import thunk from "redux-thunk"

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

const store = createStore(
    allReducers,
    // composeEnhancer(applyMiddleware(thunk)),
    applyMiddleware(thunk)
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
