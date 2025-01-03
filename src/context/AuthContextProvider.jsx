// import axios from "axios";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../vendor/firebaseConfig";
import AuthContext from "./contexts";

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState("");
	const provider = new GoogleAuthProvider();

	const createUser = async (email, password, profile) => {
		try {
			const { user } = await createUserWithEmailAndPassword(auth, email, password);
			localStorage.setItem("uid", user?.uid);
			await updateProfile(auth.currentUser, profile);
			toast.success("Welcome " + profile.displayName || "User");
		} catch (err) {
			console.log(err);
		}
	};
	const login = async (email, password) => {
		try {
			const { user } = await signInWithEmailAndPassword(auth, email, password);
			if (!user) {
				toast.error("Unable to login!");
				return;
			}
			toast.success("Welcome " + user.displayName || "User");
		} catch (err) {
			console.log(err);
		}
	};
	const googleSignIn = async (navigate) => {
		try {
			const { user } = await signInWithPopup(auth, provider);
			if (!user) {
				toast.error("Unable to login!");
				return;
			}
			toast.success("Welcome " + user.displayName);
		} catch (err) {
			console.log(err);
		}
	};
	const logout = async () => {
		await signOut(auth);
		setUser("");
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				localStorage.setItem("uid", user?.uid);
				// axios
				// 	.post("https://foundly-server.vercel.app/token", {
				// 		uid: user?.uid,
				// 		email: user?.email,
				// 	})
				// 	.then((res) => localStorage.setItem("token", res.data.message));
				setUser(user);
			} else {
				// axios.post("https://foundly-server.vercel.app/logout", {}, { withCredentials: true }).then((res) => {});
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);
	return (
		<AuthContext.Provider value={{ createUser, login, logout, googleSignIn, user, setUser }}>
			{children}
			<ToastContainer position="bottom-right" />
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
