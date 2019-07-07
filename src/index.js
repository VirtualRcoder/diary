import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

//create redux store -> reducers -> 'actions - action type' | applyMiddleware
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//provide the store to react
 
ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();
