import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../actions/user.actions';
import Apicall from '../components/Api-call';
import Navigation from '../components/Navigation';
import NavigationBarLeft from '../components/NavigationBarLeft';
import WelcomeUser from '../components/WelcomeUser';


const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUser(userId))
    })


    return (
        <div className="home">
            <Navigation />
            <NavigationBarLeft />
            <Apicall />
            <div className="corpus-home">
                <WelcomeUser  />
            </div>
          
        </div>
    );
};

export default Home;