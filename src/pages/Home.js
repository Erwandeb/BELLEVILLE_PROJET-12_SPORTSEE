import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import NavigationBarLeft from '../components/NavigationBarLeft';
import WelcomeUser from '../components/WelcomeUser';
import api from '../api';
import KeyData from '../components/KeyData';


const Home = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState({});


    useEffect(() => {
        mockingApiUserDetails();
    },[])
    
    function mockingApiUserDetails(){
        api.getUserDetails(99)
        .then(
            (user) => {
            setIsLoaded(true);
            setUser(user);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
        .catch(err => console.log(err))
        console.log("user99", user);
    }


    if(error) {
        return <div className="infoHomePage">Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="infoHomePage">Chargement...</div>;
    } else {
    return (
        <div className="home">
            <Navigation />
            <NavigationBarLeft />
            <div className="corpus-home">
                <WelcomeUser user={user} />
                <KeyData user={user} />
            </div>
          
        </div>
    );
    }
};

export default Home;