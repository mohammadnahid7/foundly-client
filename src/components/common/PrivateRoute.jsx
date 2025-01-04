import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/contexts";
import LoginPage from "../../pages/LoginPage";

const PrivateRoute = ({ children }) => {
	const { pathname } = useLocation();
	const { user } = useContext(AuthContext);
	if ((pathname == "/login" || pathname == "/register") && user && user.email) {
		// Done
		return <Navigate to="/" />;
	} else if (user && user.email) {
		return children;
	} else if ((pathname == "/login" || pathname == "/register") && !user) {
		return children;
	}
	return <LoginPage />;
};

export default PrivateRoute;
