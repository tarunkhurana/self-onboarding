import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'


import { store } from './store/store'

import './index.css';
import Routes from './app.routes';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes>
        <Navbar />
      </Routes>
    </Provider>
  </React.StrictMode>
);
