import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "../component/login-component";
import { Navigate } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const {store} = useContext(Context);

	return (
		<>
			<div className="container general-body">
				<div className="body-home">
					{store.auth == true ? <Navigate to="/private-page"/> : <Login />}
				</div>
			</div>
		</>
	);
};
