import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Error from "./components/utils/Error";
import RestaurantMenu from "./components/Pages/RestaurantMenu";
import Profile from "./components/Pages/Profile";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import { lazy, Suspense,useState } from "react";
import Shimmer from "./components/utils/Shimmer";
import "./App.css";
import UserContext from "./helpers/userContext";

const Instamart = lazy(() => import("./components/Pages/Instamart"));

const App = () => {
  const [user,setUser] = useState({
    user:"AyB",
    email:"ayb@ayb.com"
  })
  return (
    <UserContext.Provider value={{user:user,setUser:setUser}}>
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: <Suspense fallback={Shimmer}><Instamart/></Suspense>,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
export default appRouter;
