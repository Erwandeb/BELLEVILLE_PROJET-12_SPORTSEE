import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import NavigationBarLeft from '../components/NavigationBarLeft';
import WelcomeUser from '../components/WelcomeUser';
import api from '../api';
import KeyData from '../components/KeyData';


const Home = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
       const userDetails = api.getUserDetails(99)
            .then(() => setUser(user))
            .catch(() =>{console.log('erreur from mock')})
    },[])
  
    console.log("olé ", user)

    /*
    <WelcomeUser userName={user}/>
    <KeyData userName={user}/>
    */

    return (
        <div className="home">
            <Navigation />
            <NavigationBarLeft />
            <div className="corpus-home">
                
            </div>
          
        </div>
    );
};

export default Home;