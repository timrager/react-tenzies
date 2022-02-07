import React from 'react';


const Dice = (props) => {


    return (
        <div className="die-face">
            {
                props.isHeld
                ?
                    <h2 className="dice dice-hold" onClick={props.holdDice}>{props.value}</h2>
                :
                    <h2 className="dice" onClick={props.holdDice}>{props.value}</h2>
            }
            
        </div>
    )
}

export default Dice;