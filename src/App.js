import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent.js";
import BodyComponent from "./Components/BodyComponent.js";
import FooterComponent from "./Components/FooterComponent.js";
// import About from "./Components/About.js";
import Error from "./Components/Error.js";
import Contact from "./Components/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import Profile from "./Components/Profile.js";
import Shimmer from "./Components/Shimmer.js";
import Instamart from "./Components/Instamart.js"

//config-driven UI
const About = lazy(()=>import('./Components/About.js')) //lazy loading, we have removed the import of About from the top because we are using it here for lazy loading

const AppLayout = () => {
  return (
    //this empty tag is React.Fragment and it acts like one parent inside JSX
    <>
      <HeaderComponent />
      <Outlet />
      {/* <BodyComponent /> */}
      <FooterComponent />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<Shimmer/>}><About /></Suspense>,
        children: [
          {
            path: "profile", //here we dont have to write /profile because react will think it as localhost:1234/profile but it has to be localhost:1234/about/profile
            element: <Profile />, //we need to create an outlet in the parent for this to work and for profile the parent is About. Outlet will be in About.js
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:restroId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
