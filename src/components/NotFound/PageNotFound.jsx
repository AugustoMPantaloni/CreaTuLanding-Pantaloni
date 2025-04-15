import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
return (
    <div className="page-not-found">
        <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">¡Vaya! La página que buscas no existe.</p>
        <Link to="/" className="not-found-link">
            Regresar al inicio
        </Link>
        </div>
    </div>
);
};

export default PageNotFound;
