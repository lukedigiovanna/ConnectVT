import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Paths from '../constants/paths';
import '../styles/app.scss';

import { Provider } from 'react-redux';

import rrfProps from '../constants/firebase';

import Login from './login';
import Dashboard from './dashboard';
import Register from './register';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Routes>
          <Route path={Paths.root} element={<Dashboard />} />
          <Route path={Paths.login} element={ <Login /> } />
          <Route path={Paths.register} element={ <Register /> } />
        </Routes>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
