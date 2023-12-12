//Adrian Lorenzo Mederos
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux'
import store from './store/index'

const theme = createTheme({
  palette: {
     mode: 'light',
     primary: {
       main: '#fff59d',
     },
     secondary: {
       main: '#9575cd',
     },
     background: {
       default: '#000000',
       paper: '#1c1c1c',
     },
     text: {
       primary: 'rgba(255,255,255,1)',
       secondary: 'rgba(125,124,124,0.6)',
       disabled: '#81d4fa',
     },
     error: {
       main: '#b71c1c',
     },
     warning: {
       main: '#e65100',
     },
     success: {
       main: '#00e676',
     },
  },
 
  typography: {
     fontSize: 15,
     fontWeightLight: 400,
     fontWeightRegular: 500,
     fontWeightMedium: 400,
     fontWeightBold: 600,
     htmlFontSize: 12,
     h1: {
       fontWeight: 400,
       fontSize: '7rem',
     },
     fontFamily: 'Montserrat',
     h6: {
       fontSize: '2.6rem',
       fontWeight: 500,
       lineHeight: 1.78,
     },
     h5: {
       fontSize: '2.6rem',
       lineHeight: 1.32,
     },
     h4: {
       fontSize: '3.1rem',
       fontWeight: 500,
     },
     h3: {
       fontSize: '3.4rem',
     },
     h2: {
       fontSize: '4.1rem',
     },
     subtitle1: {
       fontSize: '2rem',
     },
     button: {
       fontSize: '1.5rem',
       lineHeight: 2.04,
     },
     caption: {
       fontSize: '1.8rem',
     },
  },
 })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
