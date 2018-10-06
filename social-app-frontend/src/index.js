import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import appReducer from './reducers/index';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import App from './components/layout/App';
import 'bootstrap/dist/css/bootstrap.min.css';

// const store = createStore(
//   appReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
