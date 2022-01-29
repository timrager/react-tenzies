import React, {useState} from 'react';
import Dice from './Dice';

const App = () => {

  const allNewDice = () => {
    let diceArray = [];

    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.ceil(Math.random() * 6))
    }
    
    return diceArray;
  }

  const [dice, setDice] = useState(allNewDice())

  const diceElements = dice.map((die, i) => <Dice key={i} value={die} />)

  return (
      <main className="board">
        <div className="dice-container">
          {diceElements}
        </div>
        <div className="roll-btn" onClick={() => setDice(allNewDice)}> Roll </div>
      </main>
  );
};


export default App;