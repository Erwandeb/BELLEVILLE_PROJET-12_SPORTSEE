import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import NavigationBarLeft from '../components/NavigationBarLeft';
import WelcomeUser from '../components/WelcomeUser';
import api from '../api';
import KeyData from '../components/KeyData';
import BarChartActivity from '../components/BarChartActivity';
import AverageSession from '../components/AverageSession';
import PerformanceChart from '../components/PerformanceChart';
import DailyScore from '../components/DailyScore';

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
    const [performance, setPerformance] = useState([]);


/**
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* This variable is used to select specific ID of a User
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/
const id = 12;

 
    useEffect(() => {

        // Mocking User Details
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

        // Mocking User Activity
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

           // Useful variables
            const daysOfWeek = {
                1: 'L',
                2: 'M',
                3: 'M',
                4: 'J',
                5: 'V',
                6: 'S',
                7: 'D'
            }

        // Mocking User Average Sessions
        function mockingApiUserAverageSession(){
            api.getUserAverageSession(id)
            .then(
                (average) => {
                setIsLoaded(true);
                const averageByDays = average.sessions.map((sess)=>{
                    return {
                        ...sess,
                        dayWeek : daysOfWeek[sess.day]
                    }
                })
                setAverage(averageByDays);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            .catch(err => console.log(err))
        }

        // Mocking User Performance 
        function mockingApiUserPerformance(){
            api.getUserPerformance(id)
            .then(
                (performance) => {
                setIsLoaded(true);
                const perfs = performance.data.map((perf)=>{
                    return {
                        ...perf,
                        kindName : performance.kind[perf.kind]
                    }
                })
                setPerformance(perfs);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            .catch(err => console.log(err))
        }

        mockingApiUserDetails();
        mockingApiUserActivity();
        mockingApiUserAverageSession();
        mockingApiUserPerformance();
    },[])
    
  
    
    // Handle Error, loading or render home Page 
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
                <div className="graphic-grid-size-bloc">
                    <div className="graphic-grid" >
                        <BarChartActivity activity = {activity} />
                        <AverageSession average={average} />
                        <PerformanceChart performance={performance}/>
                        <DailyScore  user={user}/>
                        <KeyData user={user} />
                    </div>
               
                </div>
            </div>
           
        </div>
    );
    }
};

export default Home;