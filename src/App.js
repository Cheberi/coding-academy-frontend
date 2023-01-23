import './App.css';
import { createRoot } from "react-dom/client";
import router from './route.js'
import { RouterProvider } from "react-router-dom";

const App = () => {
  console.log(process.env.REACT_APP_BACKEND_API)
  return (
    createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
    )
  );
}

export default App;
