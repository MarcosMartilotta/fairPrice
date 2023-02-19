import { createBrowserRouter as Router } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import StatisticsPage from "../pages/StatisticsPage";
import AmbientsPage from "../pages/AmbientsPage";
import AmbientTypePage from "../pages/AmbientTypePage";
import BudgetPage from "../pages/BudgetPage";
import ResultsPage from "../pages/ResultsPage";
import MisionPage from "../pages/MisionPage";
import TuttorialsPage from "../pages/TuttorialsPage";

export const routes = Router([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <StatisticsPage />,
      },
      {
        path: "/questionnarie/ambients",
        element: <AmbientsPage />,
      },
      {
        path: "/questionnarie/type",
        element: <AmbientTypePage />,
      },
      {
        path: "/questionnarie/budget",
        element: <BudgetPage />,
      },
      {
        path: "/questionnarie/results",
        element: <ResultsPage />,
      },
      {
        path: "/tuttorials",
        element: <TuttorialsPage />,
      },
      {
        path: "/ourmission",
        element: <MisionPage />,
      },
    ],
  },
]);
