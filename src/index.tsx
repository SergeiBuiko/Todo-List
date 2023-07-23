import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

export const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <CssBaseline />
      <App />
    </BrowserRouter>
  </Provider>
);
