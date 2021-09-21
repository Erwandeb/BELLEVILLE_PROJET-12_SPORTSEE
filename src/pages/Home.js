import React from 'react';
import Navigation from '../components/Navigation';
import NavigationBarLeft from '../components/NavigationBarLeft';
import WelcomeUser from '../components/WelcomeUser';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <NavigationBarLeft/>
            <div className ="corpus-home">
                <WelcomeUser/>
            </div>
          
        </div>
    );
};

export default Home;