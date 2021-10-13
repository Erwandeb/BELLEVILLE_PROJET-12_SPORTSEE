import React from 'react';
import PropType from 'prop-types';
import calorieIcon from '../public/medias/calories-icon.png';
import proteinIcon from '../public/medias/protein-icon.png';
import carbsIcon from '../public/medias/carbs-icon.png';
import fatIcon from '../public/medias/fat-icon.png';

/**
* This component view show keyData 
* Data come from the page Home.js
* 
* @author Erwan
* @version 1.1
*/

const KeyData = ({ user }) => {

    // if "undefined" error
    if(!user.keyData) {
        return null
    }

    return (
        <div className ="keyData">

            <div className="keyCount">
                    <img src={calorieIcon} alt="Icone flamme rouge"/>
                    <div className="caloriesCountData">
                        <p className="dataBold">{user.keyData.calorieCount}kCal</p>
                        <p>Calories</p>
                    </div>
            </div>

            <div className="keyCount">
                    <img src={proteinIcon} alt="Icone cuisse poulet bleu"/>
                    <div className="proteilCountData">
                        <p className="dataBold">{user.keyData.proteinCount}g</p>
                        <p>Proteines</p>
                    </div>
            </div>

            <div className="keyCount">
                    <img src={carbsIcon} alt="Icone pommes jaunes"/>
                    <div className="carbohydrateCountData">
                        <p className="dataBold">{user.keyData.carbohydrateCount}g</p>
                        <p>Glucides</p>
                    </div>
            </div>

            <div className="keyCount">
                    <img src={fatIcon} alt="Icone flamme rouge"/>
                    <div className="lipidCountData">
                        <p className="dataBold">{user.keyData.lipidCount}g</p>
                        <p>Lipides</p>
                    </div>
            </div>
            
        </div>
    );
};

/*
KeyData.propTypes ={
    firstname:PropTypes.string.isRequired
}
*/


export default KeyData;