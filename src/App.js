import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/login/Login';
import Orders from './components/Orders/Orders';
import Product from './components/Product/Product';
import PrivateRouts from './components/routes/PrivateRouts';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import Signup from './components/signup/Signup';
import Main from './layout/Main';
import { ProductsAndCardLoaders } from './loaders/ProductsAndCardLoaders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        // {
        //   path: '/shop',
        //   element: <Shop></Shop>
        // },
        {
          path: '/orders',
          loader: ProductsAndCardLoaders,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <PrivateRouts><Inventory></Inventory></PrivateRouts>
        },
        {
          path: '/shipping',
          element: <PrivateRouts><Shipping></Shipping></PrivateRouts>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ]
    },
  ])


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
