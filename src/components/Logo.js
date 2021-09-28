import React from 'react';
import logoImg from '../public/medias/logosvg.svg';

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