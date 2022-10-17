
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Contex/Context';

const PrivateRoute = ({children}) => {
    const {user,load}= useContext(AuthContext);
    if(load){
        return <p>Loading......</p>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>
}

export default PrivateRoute;