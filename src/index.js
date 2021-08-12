import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
