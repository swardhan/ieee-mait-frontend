import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index'

import App from './components/App';

let store = createStore(rootReducer)

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.querySelector('#root')
	);