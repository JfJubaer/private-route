import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contex/Context';

const Login = () => {
    const {signIn,googleSignIn}=useContext(AuthContext);
    function handleLogin(event){
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        signIn(email,pass)
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>console.log(error));
        form.reset();
    }
function googleLogIn(){
    googleSignIn()
    .then((res)=>{
        console.log(res.user)
    })
    .catch(error=>console.error(error))
}
    return (
        <div>
        <div>
            <div className="hero min-h-screen bg-slate-700">
            <div className="hero-content flex-col lg:flex-col">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login!!</h1>
            </div>
            <form onSubmit={handleLogin}>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-accent">
            <div className="card-body">
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
                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link><br />
                    
                </label>
                <label className="label">
                <Link to='/register' className="label-text-alt link link-hover"> New here ? Please,Register</Link>
                
                    
                </label>
                
                </div>
                <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Login</button>
                </div>
            </div>
            </div>
            </form>
            <button onClick={googleLogIn} className="btn btn-success">Google Sign In</button>
            </div>
            </div>
            </div>
            </div>
    );
};

export default Login;<h2>This is login</h2>