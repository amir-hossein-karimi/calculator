import './assets/styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer, Zoom } from 'react-toastify';

import { store, persistor } from './store';

import App from './App';

const container = document.getElementById('root');

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ToastContainer
          position='top-right'
          transition={Zoom}
          autoClose={3000}
          draggable={false}
          icon={false}
          closeButton={false}
          rtl
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          hideProgressBar
        />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  container,
);
