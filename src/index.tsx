
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps, store } from './store';

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<Router>
        <App />
			</Router>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root')
);
