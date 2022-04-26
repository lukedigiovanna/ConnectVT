import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/app.scss';
import App from './pages/app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <App />
  </Router>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './pages/app';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import { rrfProps, store } from './store';
// import PopupWrapper from './components/popup-wrapper';

// ReactDOM.render(
// 	<Provider store={store}>
// 		<ReactReduxFirebaseProvider {...rrfProps}>
// 			<Router>
// 				<PopupWrapper>
// 					<App />
// 				</PopupWrapper>
// 			</Router>
// 		</ReactReduxFirebaseProvider>
// 	</Provider>,
// 	document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
