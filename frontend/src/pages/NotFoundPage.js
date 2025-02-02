import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center mt-5">
            <h1 className="text-danger">404</h1>
            <h2>Oops! Page Not Found</h2>
            <p>The page you are looking for might have been removed or doesn’t exist.</p>
            <Link to="/" className="btn btn-primary mt-3">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
