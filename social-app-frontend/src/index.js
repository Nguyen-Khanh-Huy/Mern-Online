import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import appReducer from './reducers/index';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import App from './components/layout/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js/dist/umd/popper.min';

// const store = createStore(
//   appReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
