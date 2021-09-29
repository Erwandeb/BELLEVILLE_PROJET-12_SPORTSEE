import React from 'react';

const WelcomeUser = (props) => {

    console.log(props)
    return (
        <div className="accueil-display">
            <h1>Bonjour Thomas</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default WelcomeUser;