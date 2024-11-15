import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider, Outlet } from "react-router-dom";
import Header from './src/header';
import Footer from './src/footer';
import Body from './src/body'
import Add from './src/add';
import Read from './src/read';


const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };


const AppRouter = createBrowserRouter ([
{
    path : "/",
    element : <AppLayout />,
    errorElement : <Error />,
    children : [
    {
        path : "/",
        element: <Body />,
    },
    {
        path : "/add",
        element: <Add />,
    },
    {
        path : "/read",
        element : <Read />,
    },
    ],
},
]);
  
const root = ReactDOM.createRoot(document.getElementById("root"));
  
root.render(<RouterProvider router={AppRouter}/>);
