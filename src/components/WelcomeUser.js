import React from 'react';
import PropTypes from 'prop-types'

/**
* This component view show user name
* Data come from the page Home.js
* 
* @param user is props from home
*
* @author Erwan
* @version 1.1
*/


const WelcomeUser = ({ user }) => {

    if(!user.userInfos){
        return null
    }
    console.log(user);
    return (
        <div className="accueil-display">
            <h1>Bonjour <strong>{user.userInfos.firstname}</strong></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};


WelcomeUser.propTypes ={
    firstname:PropTypes.string.isRequired
}

export default WelcomeUser;