import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Page/Error";
import Home from "./components/Page/Home";
import Contact from "./components/Page/Contact";
import Header from "./components/Elements/Header";
import reportWebVitals from './reportWebVitals';

//router configuration
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/error",
      element: <Error/>,
    },
    {
      path: "/header",
      element: <Header/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
  ],
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
