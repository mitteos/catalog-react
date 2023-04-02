import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {persistor, store} from "store/store";
import "styles/global.css";
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
  </Provider>
);
