import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import routesConfig from './routesConfig';

function App() {

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>

      <Routes>
        {routesConfig.map((value, index) => {
          return <Route
              key={index}
              path={value.path}
              element={value.component}
              exact={value.exact}
            />
        })}
      </Routes>
    </div>
  );
}

export default App;
