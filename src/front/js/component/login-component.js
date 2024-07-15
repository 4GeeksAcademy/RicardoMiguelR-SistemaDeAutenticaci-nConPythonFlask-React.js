import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Login = () => {

    const {actions} = useContext(Context) 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    function sendData (e) {
        e.preventDefault()
        console.log(email, password)
        actions.login(email, password)
    }

    return (
        <>
            <div className="container login-page">
                <div className="title-login text-center mt-5">
                    <h1>Login</h1>
                </div>
                <div className="body-login mt-4 rounded-pill position-relative">
                    <form className="form-floating" onSubmit={sendData}>
                        <div className="form-floating">
                            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="floatingInputValue" placeholder="Email" />
                            <label htmlFor="floatingInputValue">Email</label>
                        </div>
                        <div className="form-floating mt-4">
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="button-login d-grid mt-4">
                            <button type="submit" className="btn btn-outline-info">
                                <b>Log in
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-box-arrow-in-right ms-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                                    <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                                </svg></b>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="link-signup text-center mt-3">
                    <p>
                        If you are not registered yet, enter <Link to="/user-register"><b>here</b>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill-add mb-1" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                        </svg>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}