import React from 'react';
import Navigation from '../components/Navigation';
import NavigationBarLeft from '../components/NavigationBarLeft';

/**
* This page is "404 Not Found"
* 
* @author Erwan
* @version 1.1
*/

const NotFound = () => {
    return (
        <div className="home">
        <Navigation />
        <NavigationBarLeft />
        <div className="notFound">
            <div className="Notfound-Display">
                <p>Erreur 404 ! La page est introuvable</p>
            </div>
        </div>
    </div>
      
    );
};

export default NotFound;