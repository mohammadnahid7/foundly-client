import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReportsViewProvider from "./contexts/ReportsViewProvider.jsx";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LostReportsPage from "./pages/LostReportsPage.jsx";
import { routes } from "./utils/DefaultTexts.js";

const allRoutes = createBrowserRouter([
	{
		path: routes.home,
		element: <HomePage />,
	},
	{
		path: routes.lostReports,
		element: <LostReportsPage />,
	},
	{
		path: "*",
		element: <ErrorPage />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ReportsViewProvider>
			<RouterProvider router={allRoutes} />
		</ReportsViewProvider>
	</StrictMode>
);
