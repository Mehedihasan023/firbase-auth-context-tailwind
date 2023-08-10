/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProviders';

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <button className="btn btn-xs">Sign out</button>
                        </> : <Link to='/login'>login</Link>

                }
            </div>
        </div>
    );
};

export default Header;