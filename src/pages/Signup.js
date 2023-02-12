import React, { useState } from 'react'
import {  Link, redirect } from 'react-router-dom'
import axios from "axios";
import {toast ,ToastContainer} from  "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" }) //without reloading the element we change the value
  const handleSubmit = async (e) => {
     e.preventDefault();
      const{email,password} = credentials
    
    if(email === "")
    toast.warning("Email is Required !")
    else if(password === "")
    toast.warning("password is Required !")
    else if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(password))
    toast.warning("Password  is  Invalid !")
    else{
               //preventdefault is a synthatic event
               axios.post("http://localhost:3001/signup", credentials)
               .then((res)=>{
                 if(res.status === 201)
                 toast.success("Registred successfully !",{
                   position: "top-right"
                 })
                 redirect("/login")
               })
               .catch((err)=>{
                 console.log(err)
                 toast.error(err.response.data.message,{
                   position: "top-right"
                 });
               })
    }
  
  }
  const onChange=(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address/Mobile number</label>
            <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
           
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="text" className="form-control" name="password" value={credentials.password} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange} /><br />
            <Link to="/login" className="m-3 text text-danger">Already a user?</Link>
          </div>
          <button type="submit" className="m-3 btn btn-primary">Submit</button>
        </form>
      <ToastContainer/>
      </div>
    </>
  )
}
