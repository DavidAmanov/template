import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'
import Basket from './pages/Basket/Basket'
import Menu from './pages/Menu/Menu'
import Catalog from './components/Catalog/Catalog';
import Order from './pages/Order/Order';
import Contacts from './pages/Contacts/Contacts';
import Favourites from './pages/Favourites/Favourites';
import EmptyBasket from './pages/EmptyBasket/EmptyBasket';
import EmptyFavourites from './pages/EmptyFavourites/Favourites';
import ThanksPage from './pages/ThanksPage/Thanks';

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
},{
  path: '/EmptyBasket',
  element: <EmptyBasket />
},{
  path: '/EmptyFavourites',
  element: <EmptyFavourites />
},{
  path: '/ThanksPage',
  element: <ThanksPage />
}
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router}/>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
