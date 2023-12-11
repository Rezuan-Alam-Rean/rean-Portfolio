import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './routes/router.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <Toaster/>
  </React.StrictMode>,
)
