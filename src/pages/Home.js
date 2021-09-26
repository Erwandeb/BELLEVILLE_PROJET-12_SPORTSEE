import React from 'react';
import Apicall from '../components/Api-call';
import Navigation from '../components/Navigation';
import NavigationBarLeft from '../components/NavigationBarLeft';
import WelcomeUser from '../components/WelcomeUser';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <NavigationBarLeft />
            <Apicall />
            <div className ="corpus-home">
                <WelcomeUser />
            </div>
          
        </div>
    );
};

export default Home;