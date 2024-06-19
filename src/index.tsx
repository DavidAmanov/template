import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home'
import Basket from './pages/Basket/Basket'
import Menu from './pages/Menu/Menu'
import Catalog from './pages/Catalog/Catalog';
import Order from './pages/Order/Order';
import Contacts from './pages/Contacts/Contacts';
import Favourites from './pages/Favourites/Favourites';
import EmptyBasket from './pages/EmptyBasket/EmptyBasket';
import EmptyFavourites from './pages/EmptyFavourites/Favourites';
import ThanksPage from './pages/ThanksPage/Thanks';
import { Provider } from 'react-redux';
import store from './context/store';

const router = createBrowserRouter([{
  path: '/',
  element: <Home />
},{
  path: '/basket',
  element: <Basket />
},{
  path: '/menu',
  element: <Menu />
},{
  path: '/catalog',
  element: <Catalog />
},{
  path: '/order',
  element: <Order />
},{
  path: '/contacts',
  element: <Contacts />
},{
  path: '/favourites',
  element: <Favourites />
},{
  path: '/emptyBasket',
  element: <EmptyBasket />
},{
  path: '/emptyFavourites',
  element: <EmptyFavourites />
},{
  path: '/thanksPage',
  element: <ThanksPage />
}
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
