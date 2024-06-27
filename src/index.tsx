import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Menu from './pages/Menu/Menu'
import Catalog from './pages/Catalog/Catalog';
import Order from './pages/Order/Order';
import Favourites from './pages/Favourites/Favourites';
import ThanksPage from './pages/ThanksPage/Thanks';
import { Provider } from 'react-redux';
import { store, persistor } from './context/store';
import AboutUsPage from './pages/AboutUs/AboutUs';
import Contacts from './pages/Contacts/Contacts';
import ProductPage from './pages/Product/Product';
import Profile from './pages/Profile/Profile';

const router = createBrowserRouter([{
  path: '/',
  element: <Home />
},{
  path: '/cart',
  element: <Cart />
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
  path: '/aboutus',
  element: <AboutUsPage />
},{
  path: '/favourites',
  element: <Favourites />
},{
  path: '/thanksPage',
  element: <ThanksPage />
}, {
  path: '/contacts',
  element : <Contacts/>
}, {
  path: '/product/:id',
  element : <ProductPage /> 
}, {
  path: '/profile',
  element: <Profile />
}
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// persistor.purge();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
