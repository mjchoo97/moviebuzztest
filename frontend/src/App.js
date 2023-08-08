import logo from './logo.svg';
import './App.css';
import Mainpage from './pages/mainpage/Mainpage';
import { Navbar } from './components/navbar/Navbar';
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import AddMoviePage from './pages/addmovie/AddMoviePage';
import { Featured } from './components/featured/Featured';
import Moviedesc from './pages/moviedesc/Moviedesc';
import EditMoviePage from './pages/edit/Editpage';

function App() {

  const Layout = () =>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Mainpage/>
        },
        {
          path:"/addmovie",
          element:<AddMoviePage/>
        },
        {
          path:"/featured/:year",
          element:<Featured/>
        },
        {
          path:"/movie/:_id",
          element:<Moviedesc/>
        },
        {
          path:"/edit/:_id",
          element: <EditMoviePage/>
        }
      ]
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
