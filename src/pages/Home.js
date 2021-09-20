import React from 'react';
import Logo from '../components/Logo';
import NavigationBarLeft from '../components/NavigationBarLeft';

const Home = () => {
    return (
        <div className="home">
            <Logo/>
            <NavigationBarLeft/>
        </div>
    );
};

export default Home;