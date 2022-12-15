import './assets/styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';

import App from './App';

const container = document.getElementById('root');

render(
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
  </BrowserRouter>,
  container,
);
