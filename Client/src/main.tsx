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
import { RegisterPersonalDetails } from './Components/RegisterPersonalDetails/RegisterPersonalDetails';
import configStoreFunction from './Redux/configStore';
import { Provider } from 'react-redux';
import { ChangeAccountDetails } from './Components/Settings/ChangeAcountDetails';
import { Settings } from './Components/Settings/Settings';

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
  {
    path:'/registerPersonalDetails',
    Component: RegisterPersonalDetails
  },
  {
    path:'/changeAccountDetails',
    Component: ChangeAccountDetails
  },
  {
    path:'/setting',
    Component:Settings,
  },




];

const router = createBrowserRouter(routes);
const userStore = configStoreFunction();

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={userStore} >
    <RouterProvider router={router} fallbackElement={<Fallback/>}/>
    </Provider>
  // </React.StrictMode>
  
);

