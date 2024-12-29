import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
