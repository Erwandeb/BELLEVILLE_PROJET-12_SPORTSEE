import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';


/**
* This component render a navigation
* Data come from state Home.js
* We are using the library Rechart.js 
*
* @author Erwan
* @version 1.1
*/

const Navigation = () => {
    return (
        <div className="navigation">
            <Logo/>
            <div className="liste-navigation">
                <NavLink exact to="/">
                    Accueil
                </NavLink>
                <NavLink exact to="/">
                    Profil
                </NavLink>
                <NavLink exact to="/">
                Réglage
                </NavLink>
                <NavLink exact to="/">
                    Communauté 
                </NavLink>
            </div>
           
        </div>
    );
};

export default Navigation;