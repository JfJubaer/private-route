import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contex/Context';

const Nav = () => {
    const {user,logOut}=useContext(AuthContext);
    const signOut=()=>{
        logOut()
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>console.log(error));
    }
    return (
        <div className="navbar text-white bg-accent">
            <h4 className='text-5xl mx-5 p-3'>My Auth</h4>
             <ul className="menu menu-horizontal p-0">
                    <li ><Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link></li>
                    <li ><Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link></li>
                    <li ><Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link></li>
                    <li ><Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link></li>
                    </ul>

                   <span className='p-10'> {user && `Welcome ${user.email}`}</span>
                   {user?.email && <button onClick={signOut} className="btn btn-outline btn-warning">Log Out</button>}
                
        </div>
    );
};

export default Nav;