import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom';
import Student from './components/Student.jsx';

const Router = createBrowserRouter ([

  {
    path: '/about',
    element: <h1>About Us</h1>
  },
  {
    path: '/',
    element: <h1>Home</h1>
  },
  {
    path: '/students',
    element: <Student />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <a  className="btn btn-outline-primary m-3" href="/">Home</a>
    <a className="btn btn-outline-primary m-3" href="/about">About</a>
    <a  className="btn btn-outline-primary m-3" href="/students">Students</a>
    <RouterProvider router={Router} />
  </StrictMode>,
);

