import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import PrivateRoute from "./components/common/PrivateRoute.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import ReportsViewProvider from "./contexts/ReportsViewProvider.jsx";
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
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
				path: routes.allReports,
				element: (
					<PrivateRoute>
						<LostReportsPage />
					</PrivateRoute>
				),
			},
			{
				path: routes.login,
				element: (
					<PrivateRoute>
						<LoginPage />
					</PrivateRoute>
				),
			},
			{
				path: routes.register,
				element: (
					<PrivateRoute>
						<RegisterPage />
					</PrivateRoute>
				),
			},
			{
				path: routes.postReport,
				element: (
					<PrivateRoute>
						<PostReportPage />
					</PrivateRoute>
				),
			},
			{
				path: routes.reportDetails,
				element: (
					<PrivateRoute>
						<ReportDetailsPage />
					</PrivateRoute>
				),
			},
			{
				path: routes.dashboard,
				element: (
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				),
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
