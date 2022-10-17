
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Comp/Home/Home';
import Login from './Comp/Login/Login';
import Orders from './Comp/Orders';
import PrivateRoute from './Comp/PrivateRoute';
import Register from './Comp/Register/Register';
import Main from './Layout/Main';

function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<PrivateRoute><Home></Home></PrivateRoute>
        },
        {
          path:'/orders',
          element:<PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'login',
          element:<Login></Login>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
