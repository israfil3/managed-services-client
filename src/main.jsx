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
import Dashboard from './Components/Dashboard/mainDashboard/Dashboard.jsx';
import Man from './Components/Dashboard/man/Man.jsx';
import Request from './Components/Dashboard/ContactRequset/Request.jsx';
import AddService from './Components/Dashboard/AddService/AddService.jsx';
import ManageService from './Components/Dashboard/ManageService/ManageService.jsx';



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
  {
    path: 'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'man',
        element:<Man></Man>
      },
      {
        path: 'request',
        element:<Request></Request>
      },
      {
        path:"addService",
        element:<AddService></AddService>
      },
      {
        path:"manageService",
        element:<ManageService></ManageService>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
  </AuthProvider>
)
