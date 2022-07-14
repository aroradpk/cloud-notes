import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({email : "", password:""});
    let navigate = useNavigate();

    const loginChangeHandler=(e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
          });
          const json = await response.json();
          console.log(json);
          if (json.success){
            //save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/")
          } else{
            alert("Invalid credentials")
          }
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name = "email" aria-describedby="emailHelp" value={credentials.email} onChange={loginChangeHandler} />
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