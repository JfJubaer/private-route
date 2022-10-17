
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contex/Context';

const Register = () => {
    const {createUser}=useContext(AuthContext);
    function handleRegister(event){
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.pass.value;
        createUser(email,pass)
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>console.log(error));
        form.reset();
    }
    return (
        <div>
                   <div>
        <div className="hero min-h-screen bg-slate-700">
        <div className="hero-content flex-col lg:flex-col">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register!</h1>
            </div>
            <form onSubmit={handleRegister}>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-accent">
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='pass' placeholder="password" className="input input-bordered" />
                <label className="label">
                    <Link to='/login' className="label-text-alt link link-hover"> Already Have an Account ? Please,Login</Link>
                </label>
                </div>
                <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Register</button>
                </div>
            </div>
            </div>
            </form>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Register;