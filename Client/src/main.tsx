import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Login } from './Components/Login/Login';
import { SignUp } from './Components/SignUp/SignUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { createRoot } from 'react-dom';
import { Home } from './Components/Home/Home';
import {Fallback} from './Components/Fallback/Fallback';

interface Route {
  path: string;
  Component: React.ComponentType;
}

const routes: Route[] = [
  {
    path: '/',
    Component: App,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/signup',
    Component: SignUp,
  },
  {
    path: '/home',
    Component: Home,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Fallback/>}/>
  </React.StrictMode>
);

