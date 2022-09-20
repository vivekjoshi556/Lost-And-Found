import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from "./components/contexts/authContext";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <AuthContextProvider>
            <App />
            <ToastContainer position = "top-right" autoClose = { 5000 } hideProgressBar = { true } newestOnTop = { true } closeOnClick />
        </AuthContextProvider>
    </BrowserRouter>
);
reportWebVitals();
