import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {Provider} from "react-redux";
import store from "./component/redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>

);
reportWebVitals();
