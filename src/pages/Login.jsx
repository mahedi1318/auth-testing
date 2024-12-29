import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.init';
import Swal from 'sweetalert2'


const Login = () => {

  const navigate = useNavigate()
  const [passShow, setPassShow] = useState(false)
  const handleLoginSubmit = (e) => {
    e.preventDefault()  
    const form = e.target;
    const email = form.email.value
    const password = form.password.value
    console.log({email, password})

    signInWithEmailAndPassword(auth, email, password).then((result)=> {
      console.log(result.user)
      navigate("/")
      if(result.user){
         Swal.fire({
            title: "Login SuccessFully !",
            icon: "success",
            draggable: true
        });
      }
    }).catch((err)=>{
      console.log(err.message)
    })
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 w-[600px]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleLoginSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={passShow ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                <div className="absolute right-3 inset-y-12 cursor-pointer">
                  {passShow ? <span onClick={() => setPassShow(!passShow)}>Off</span> : <span onClick={() => setPassShow(!passShow)}>Show</span>}
                </div>
                <label className="label">
                  <Link to="/forgotPassword" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center">
              <p className='mb-4'>Create a account ? <Link to="/">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
