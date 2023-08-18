import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routers/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' bg-[#122943]'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
