import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

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