import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from './routes/root.js'
import Curriculum from './routes/curriculum.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: []
  },
  {
    path: "curriculum",
    element: <Curriculum />
  }
]);

export default router;
