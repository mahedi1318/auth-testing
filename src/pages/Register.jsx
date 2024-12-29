import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../firebase/firebase.init'
import {createUserWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2'

const Register = () => {

    const handleRegisterSubmit = (e)=>{
        e.preventDefault()        
        const form = e.target;
        const username = form.username.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({username, photo, email, password})
        createUserWithEmailAndPassword(auth, email, password).then((result)=>{
            console.log(result)
            if(result.user){
                Swal.fire({
                    title: "Register SuccessFully !",
                    icon: "success",
                    draggable: true
                });
            }
            form.reset()
        }).catch((error)=>{
            console.log(error)
        })
    }


  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            </div>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <form onSubmit={handleRegisterSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input type="text" name='username' placeholder="user name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="url" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />               
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <div className="text-center">
                <p className='mb-4 '>Already have account ? <Link className='text-blue-600 font-bold' to="/login">Login</Link></p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Register
