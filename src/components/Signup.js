import React, { useState , useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {AlertContext} from '../context/notes/NoteContext';


const Signup = () => {
  const signupContext = useContext(AlertContext);
  const {showAlert} = signupContext;
  const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword:"" });
    let navigate = useNavigate();

    const signupChangeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const submitHandler = async (e) => {
      e.preventDefault();
      const {name, email, password} = credentials;
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password})
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
          //save the auth token and redirect
          localStorage.setItem('token', json.authToken);
          navigate("/")
         showAlert("Account Created Successfully", "success");
      } else {
         showAlert("Invalid Credentials", "danger");
      }
  }
  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name' onChange={ signupChangeHandler } required/>
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' onChange={ signupChangeHandler } required/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={ signupChangeHandler } minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={ signupChangeHandler } minLength={5} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup