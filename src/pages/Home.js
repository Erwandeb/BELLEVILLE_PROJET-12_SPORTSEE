import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import NavigationBarLeft from '../components/NavigationBarLeft';
import WelcomeUser from '../components/WelcomeUser';
import api from '../api';
import KeyData from '../components/KeyData';


const Home = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
       api.getUserDetails(99).then((res) => setUser(res.user))
         
    },[])
  
    console.log("user ", user)

    /*
    <WelcomeUser userName={user}/>
    <KeyData userName={user}/>
    */

    return (
        <div className="home">
            <Navigation />
            <NavigationBarLeft />
            <div className="corpus-home">
                <WelcomeUser userName={user}/>
                <KeyData userName={user}/>
            </div>
          
        </div>
    );
};

export default Home;