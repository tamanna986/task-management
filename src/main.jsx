import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import LogIn from './Pages/LogIn/LogIn';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import Review from './Pages/Review/Review';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashboardLayOut from './LayOut/DashboardLayOut';
import ManageTask from './Pages/ManageTask/ManageTask';
import Profile from './Pages/Profile/Profile';
import AddTask from './Pages/AddTask/AddTask';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/review",
        element: <Review></Review>
      },
      
      
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashboardLayOut></DashboardLayOut></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute><ManageTask></ManageTask></PrivateRoute>
      },
      {
        path: "dashboard/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "dashboard/addtask",
        element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
      },
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
