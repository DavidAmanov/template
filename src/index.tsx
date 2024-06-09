import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home'
import Basket from './pages/Basket/Basket'
import Menu from './pages/Menu/Menu'
import Catalog from './components/Catalog/Catalog';
import Order from './pages/Order/Order';
import Contacts from './pages/Contacts/Contacts';
import Favourites from './pages/Favourites/Favourites';

const router = createBrowserRouter([{
  path: '/',
  element: <Home />
},{
  path: '/basket',
  element: <Basket />
},{
  path: '/Menu',
  element: <Menu />
},{
  path: '/Catalog',
  element: <Catalog />
},{
  path: '/Order',
  element: <Order />
},{
  path: '/Contacts',
  element: <Contacts />
},{
  path: '/Favourites',
  element: <Favourites />
}
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
