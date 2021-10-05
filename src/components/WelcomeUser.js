import React from 'react';

const WelcomeUser = ({ user }) => {
    console.log(user);
    return (
        <div className="accueil-display">
            <h1>Bonjour <strong>{user.userInfos.firstname}</strong></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default WelcomeUser;