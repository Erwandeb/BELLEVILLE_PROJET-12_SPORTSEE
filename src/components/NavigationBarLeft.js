import React from 'react';
import yogaIcon from '../public/medias/yogaIcon.png';
import swimIcon from '../public/medias/swimIcon.png';
import bikeIcon from '../public/medias/bikeIcon.png';
import muscleIcon from '../public/medias/muscleIcon.png';

/**
* This component render a navigation component, fixed on the left
* Data come from state Home.js
*
*
* @author Erwan
* @version 1.1
*/

const NavigationBarLeft = () => {
    return (
        <div className="NavigationBarLeft">
            <div className="iconList">
                <img src={yogaIcon} alt="illustration du yoga"/>
                <img src={swimIcon} alt="illustration de la natation"/>
                <img src={bikeIcon} alt="illustration de la pratique du velo"/>
                <img src={muscleIcon} alt="illustration de la pratique de la musculation"/>
            </div>
            <div className="copyright">
                <p>Copyright, SportSee 2020</p>
            </div>
        </div>
    );
};

export default NavigationBarLeft;