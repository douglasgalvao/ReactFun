import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from './pages/Login/Index';
import { HomePage } from './pages/Home/Index';
import { SignUp } from './pages/Signup/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  }
]);


function App() {
    return (
    <>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </>
  )
}

export default App
