import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import NavigationBarLeft from '../components/NavigationBarLeft';
import WelcomeUser from '../components/WelcomeUser';
import api from '../api';
import KeyData from '../components/KeyData';
import BarChartActivity from '../components/BarChartActivity';
import AverageSession from '../components/AverageSession';

/**
* This page group all data for chart component
* Data come from the component api.js 
* 
* @author Erwan
* @version 1.1
*/


const Home = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState({});
    const [activity, setActivity] = useState({});
    const [average, setAverage] = useState({});
    const [performance, setPerformance] = useState({});

    const id = 99;


    useEffect(() => {
        mockingApiUserDetails();
        mockingApiUserActivity();
        mockingApiUserAverageSession();
        mockingApiUserPerformance();
    },[])
    
    function mockingApiUserDetails(){
        api.getUserDetails(id)
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
    }

    function mockingApiUserActivity(){
        api.getUserActivity(id)
        .then(
            (activity) => {
            setIsLoaded(true);
            setActivity(activity);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
        .catch(err => console.log(err))
    }

    function mockingApiUserAverageSession(){
        api.getUserAverageSession(id)
        .then(
            (average) => {
            setIsLoaded(true);
            setAverage(average);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
        .catch(err => console.log(err))
    }

    
    function mockingApiUserPerformance(){
        api.getUserPerformance(id)
        .then(
            (performance) => {
            setIsLoaded(true);
            setPerformance(performance);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
        .catch(err => console.log(err))
    }

/* */
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
                <BarChartActivity activity = {activity} />
                <AverageSession average={average} />
            </div>
          
        </div>
    );
    }
};

export default Home;