import React from 'react';

const NavigationBarLeft = () => {
    return (
        <div className="NavigationBarLeft">
            <div className="iconList">
                <img src="../medias/yogaIcon.png" alt="illustration du yoga"/>
                <img src="../medias/swimIcon.png" alt="illustration de la natation"/>
                <img src="../medias/bikeIcon.png" alt="illustration de la pratique du velo"/>
                <img src="../medias/muscleIcon.png" alt="illustration de la pratique de la musculation"/>
            </div>
            <div className="copyright">
                <p>Copyright, SportSee 2020</p>
            </div>
          
        </div>
    );
};

export default NavigationBarLeft;