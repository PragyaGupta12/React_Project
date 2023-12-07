import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent.js";
import BodyComponent from "./Components/BodyComponent.js";
import FooterComponent from "./Components/FooterComponent.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About.js"
//config-driven UI

const AppLayout = () => {
  return (
    //this empty tag is React.Fragment and it acts like one parent inside JSX
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
