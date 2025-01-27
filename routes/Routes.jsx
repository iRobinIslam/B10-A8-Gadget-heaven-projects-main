import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Error from "../components/Error";
import ProductsDetails from "../pages/ProductsDetails";
import Category from "../components/Category";
import CategoryCard from "../components/CategoryCard";
import DetailsCard from "../components/DetailsCard";
import StatisticaCard from "../components/StatisticaCard";
import AddCart from "../components/AddCart";
import AddWish from "../components/AddWish";
import Contact from "../pages/Contact";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            loader: () => fetch('../Category.json'),
            element: <Category></Category>,
            children: [
              {
                path: '/',
                element: <CategoryCard></CategoryCard>,
                loader: () => fetch('../CategoryDetails.json'),
              },
              {
                path: '/ /:category',
                element: <CategoryCard></CategoryCard>,
                loader: () => fetch('../CategoryDetails.json'),
              },
            ]
          },
        ]
      },
      {
        path: '/productDetails',
        element: <ProductsDetails></ProductsDetails>,
        children: [{
          path: '/productDetails/:Id',
          element: <DetailsCard></DetailsCard>,
          loader: () => fetch('../CategoryDetails.json')

        }]
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [

          {
            path: '/dashboard',
            element: <AddCart></AddCart>
          },
          {
            path: '/dashboard/wish',
            element: <AddWish></AddWish>
          }
        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        children: [
          {
            path: '/statistics',
            element: <StatisticaCard></StatisticaCard>
          }
        ]
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      }
    ]
  },
]);

export default Routes;