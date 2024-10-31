import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import './media.css'
import { Provider } from 'react-redux';
import store from './store/index.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Cart from './Pages/Cart/Cart.jsx';


const router = createBrowserRouter([
  {
    path:"/", element: <App/>,
    children:[
     { path:"/", element: <Home/>},
     {path:'/cart', element: <Cart/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    
  </StrictMode>,
)
