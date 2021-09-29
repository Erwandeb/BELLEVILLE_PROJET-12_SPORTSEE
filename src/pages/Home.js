import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import NavigationBarLeft from '../components/NavigationBarLeft';
import WelcomeUser from '../components/WelcomeUser';
import api from '../api'


const Home = () => {

    const [user, setUser] = useState({})

    useEffect(()=>{
        api.getUserDetails(1).then(user => {
            setUser(user)
        })
        
    }, [])


    return (
        <div className="home">
            <Navigation />
            <NavigationBarLeft />
            <div className="corpus-home">
                <WelcomeUser  />
            </div>
          
        </div>
    );
};

export default Home;