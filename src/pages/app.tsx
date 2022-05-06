import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Paths from '../constants/paths';
import '../styles/app.scss';
import Login from './login';
import Dashboard from './dashboard';
import Register from './register';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path={Paths.root} element={<Dashboard />} />
        <Route path={Paths.login} element={ <Login /> } />
        <Route path={Paths.register} element={ <Register /> } />
      </Routes>
    </div>
  );
}

export default App;
