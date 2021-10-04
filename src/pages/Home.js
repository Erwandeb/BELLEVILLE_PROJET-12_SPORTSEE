import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import NavigationBarLeft from '../components/NavigationBarLeft';
import WelcomeUser from '../components/WelcomeUser';
import api from '../api';
import KeyData from '../components/KeyData';


const Home = () => {

   


    useEffect(() => {
        fetchItem();
        console.log(user)
    },[])
  
    const [user, setUser] = useState({});


    const fetchItem = async () =>{
        const fetchItem = await api.getUserDetails(99)
        .then((user) => {setUser(user);

        })
        const user = await fetchItem;
        setUser(user)
    };

    /*
        <WelcomeUser user={user}/>
        <KeyData user={user}/>
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