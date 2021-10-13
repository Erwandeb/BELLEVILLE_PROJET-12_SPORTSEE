import React from 'react';
import logoImg from '../public/medias/logosvg.svg';

/**
* This component render a logo 
* Data come from state Home.js
* We are using the library Rechart.js 
*
* @author Erwan
* @version 1.1
*/

const Logo = () => {
    return (
        <div className="main-logo">
            <div className="logo-display">
                <img src={logoImg} alt="Logo de SportSee"/>
            </div>
        </div>
    );
};

export default Logo;