import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {

	const {store, actions} = useContext(Context)
	const navigate = useNavigate();

	function handleLogout () {
		actions.logout()
		navigate('/')
	}

	return (
		<nav className="navbar bg-black p-3"  data-bs-theme="dark">
			<div className="container">
				<div className="button-home">
					<Link to="/">
						<img src="https://media.tenor.com/ya7DRciBCBcAAAAi/mis-stickers.gif" width="120px" />
					</Link>
				</div>
				<div className="button-logout">
					{store.auth == true ? (
						<div className="dropdown">
							<button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Authenticated User
								<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-person-check mb-1 ms-2" viewBox="0 0 16 16">
									<path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
									<path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
								</svg>
							</button>
							<ul className="dropdown-menu dropdown-menu-dark">
								<li><a className="dropdown-logout text-center">
									<div className="logout">
										<button type="button" className="btn btn-outline-light btn-sm" onClick={()=> handleLogout()}>
											Log out
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-left mb-1 ms-2" viewBox="0 0 16 16">
												<path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
												<path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
											</svg>
										</button>
									</div>
								</a></li>
							</ul>
						</div>
					) : null
					}
				</div>
			</div>
		</nav>
	);
};
