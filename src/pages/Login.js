import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" }) //without reloading the element we change the value
  const redirect = useNavigate()
  const handleSubmit = async (e) => {
    console.log("called");
    e.preventDefault();                //preventdefault is a synthatic event
    const { email, password } = credentials
    if (email === "")
      toast.warning("Email is requires !")
    else if (password === "")
      toast.warning("Password is requires !")
    else {
      axios.post("http://localhost:3001/login", credentials)
        .then((res) => {
          if (res.status === 200) {
            toast.success("LogIn successfully !", {
              position: "top-right"
            })
            redirect("/")
          }
        })
        .catch((err) => {
          console.log(err)
          toast.error(err.response.data.message, {
            position: "top-right"
          });
        })
    }

  }
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="container">
        <form >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address/Mobile number</label>
            <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} />
          </div>
          <Link to="/signup" className="textlink text text-danger">New user?Create your account</Link><br />
          <button type="submit" className="m-3 btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

