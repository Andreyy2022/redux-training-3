import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './app/store.js';
import { Provider } from 'react-redux';
import { worker } from './api/server.js';

async function main() {
  await worker.start({onUnhandledRequest: 'bypass'});

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )  
}

main();



