import React from 'react';
import calorieIcon from '../public/medias/calories-icon.png';
import proteinIcon from '../public/medias/protein-icon.png';
import carbsIcon from '../public/medias/carbs-icon.png';
import fatIcon from '../public/medias/fat-icon.png';




const KeyData = (props) => {

    

    return (
        <div className ="keyData">

            <div className="keyCount">
                    <img src={calorieIcon} alt="Icone flamme rouge"/>
                    <div className="caloriesCountData">
                        <p className="dataBold">1900kCal</p>
                        <p>Calories</p>
                    </div>
            </div>

            <div className="keyCount">
                    <img src={proteinIcon} alt="Icone cuisse poulet bleu"/>
                    <div className="proteilCountData">
                        <p className="dataBold">140g</p>
                        <p>Proteines</p>
                    </div>
            </div>

            <div className="keyCount">
                    <img src={carbsIcon} alt="Icone pommes jaunes"/>
                    <div className="carbohydrateCountData">
                        <p className="dataBold">250g</p>
                        <p>Glucides</p>
                    </div>
            </div>

            <div className="keyCount">
                    <img src={fatIcon} alt="Icone flamme rouge"/>
                    <div className="lipidCountData">
                        <p className="dataBold">50g</p>
                        <p>Lipides</p>
                    </div>
            </div>
            
        </div>
    );
};

export default KeyData;