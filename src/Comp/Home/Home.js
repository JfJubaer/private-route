import React, { useContext } from 'react';
import { AuthContext } from '../../Contex/Context';


const Home = () => {
    const {user}=useContext(AuthContext)
    console.log(user.displayName
        );
    return (
        <div>
            <div className="card w-96 glass mx-auto my-40">
            <figure><img src="https://placeimg.com/400/225/arch" alt="car!"/></figure>
            <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;