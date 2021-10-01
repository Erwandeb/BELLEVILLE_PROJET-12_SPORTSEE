import React from 'react';

const WelcomeUser = (props) => {

    console.log('props from welcomeUser', props.userName.userInfos)
    const {user}  = props.userName.userInfos;

    return (
        <div className="accueil-display">
            <h1>Bonjour <strong>{user.firstname}</strong></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default WelcomeUser;