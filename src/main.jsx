import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import OneItem from './Components/FunctionPage/OneItem/OneItem.jsx';
import AuthProvider from './Components/provider/AuthProvider.jsx';
import SingUp from './Components/SingUp/SingUp.jsx';
import Login from './Components/Login/Login.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Header></Header>
      },
      {
        path:"oneItem/:id",
        element:<OneItem></OneItem>,
        loader:({params})=>fetch(`http://localhost:5000/item/${params.id}`)
      },
      {
        path:'sing',
        element:<SingUp></SingUp>
      },
      {
        path:'login',
        element:<Login></Login>
        
      }
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
  </AuthProvider>
)
