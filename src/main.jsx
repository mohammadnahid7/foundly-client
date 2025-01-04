import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import ReportsViewProvider from "./contexts/ReportsViewProvider.jsx";
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import FoundReportsPage from "./pages/FoundReportsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import LostReportsPage from "./pages/LostReportsPage.jsx";
import PostReportPage from "./pages/PostReportPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ReportDetailsPage from "./pages/ReportDetailsPage.jsx";
import { routes } from "./utils/DefaultTexts.js";

const allRoutes = createBrowserRouter([
	{
		path: routes.home,
		element: <App />,
		children: [
			{
				path: routes.home,
				element: <HomePage />,
			},
			{
				path: routes.lostReports,
				element: <LostReportsPage />,
			},
			{
				path: routes.foundReports,
				element: <FoundReportsPage />,
			},
			{
				path: routes.login,
				element: <LoginPage />,
			},
			{
				path: routes.register,
				element: <RegisterPage />,
			},
			{
				path: routes.postReport,
				element: <PostReportPage />,
			},
			{
				path: "details",
				element: <ReportDetailsPage />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
			},
		],
	},
	{
		path: "*",
		element: <ErrorPage />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ReportsViewProvider>
			<AuthContextProvider>
				<RouterProvider router={allRoutes} />
			</AuthContextProvider>
		</ReportsViewProvider>
	</StrictMode>
);
