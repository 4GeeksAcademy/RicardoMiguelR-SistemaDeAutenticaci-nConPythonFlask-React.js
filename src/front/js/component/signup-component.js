import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {

    const {actions} = useContext(Context)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function sendData (e) {
        e.preventDefault()
        console.log(name, email, password)
        if (name.trim() == '', email.trim() == '', password.trim() == '') {
            alert('One or more fields are empty, create your user!')
        } else {
            actions.signup(name, email, password)
            alert('User created successfully!')
            navigate('/')
        }
    }

    return (
        <>
            <div className="container signup-page">
                <div className="signup-title text-center mt-5">
                    <h1>Create your registration</h1>
                </div>
                <div className="body-signup mt-4 position-relative">
                    <form className="form-floating" onSubmit={sendData}>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="fullName" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Full name" />
                            <label htmlFor="floatingInputValue">Enter your full name</label>
                        </div>
                        <div className="form-floating mt-4">
                            <input type="email" className="form-control" id="Email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
                            <label htmlFor="floatingInputValue">Enter an email</label>
                        </div>
                        <div className="form-floating mt-4">
                            <input type="password" className="form-control" id="Password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                            <label htmlFor="floatingPassword">Enter a password</label>
                        </div>
                        <div className="save-user text-end mt-4">
                            <button type="submit" className="btn btn-outline-info">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}