import React from 'react';


const Dice = (props) => {

    return (
        <div className="die-face">
            <h2 className="dice">{props.value}</h2>
        </div>
    )
}

export default Dice;