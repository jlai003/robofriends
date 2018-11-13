import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';
import "tachyons";
// import {robots} from './robots';

ReactDOM.render( <App/>, document.getElementById('root'));
registerServiceWorker();