import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx"
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import Courses from './Pages/Courses/Courses.jsx';
import Page404 from './Pages/404 page/Page404.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path:"courses",
        element: <Courses/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
    ]
  },

  {
    path: "/",
    element: <App layout="account"/>,
    children:[
      {
        path:"login",
        element: <Login/>
      },
      {
        path:"signup",
        element: <Signup/>
      },
      {
        path:"*",
        element: <Page404/>
      },
    ]
  
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
