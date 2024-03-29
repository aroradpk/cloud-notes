import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {AlertContext} from '../context/notes/NoteContext';

const Login = () => {
    const signupContext = useContext(AlertContext);
    const { showAlert } = signupContext;
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const loginChangeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/")
            showAlert("Logged in Successfully", "success");
        } else {
            showAlert("Invalid Credentials", "danger");
        }
    }
    return (
        <div className='container my-3'>
            <h3>Please Login to use CloudNotes</h3>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={loginChangeHandler} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={loginChangeHandler} />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login