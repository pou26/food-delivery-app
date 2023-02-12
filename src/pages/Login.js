import React, { useState } from 'react'
import { json, Link } from 'react-router-dom'

export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" }) //without reloading the element we change the value
  const handleSubmit = async (e) => {
    e.preventDefault();                //preventdefault is a synthatic event
    const response = await fetch("http://localhost:3001/login", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const res = await response.json()
    console.log(res);

    if (!json.success) {
      alert("Enter valid Credentials");
    }
  }
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address/Mobile number</label>
            <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} />
          </div>
          <Link to="/signup" className="m-3 text text-danger">New user?Create your account</Link><br/>
          <button type="submit" className="m-3 btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

