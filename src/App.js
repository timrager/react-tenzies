import React, {useState} from 'react';
import Dice from './Dice';
import { nanoid } from 'nanoid';

const App = () => {

  const allNewDice = () => {
    let diceArray = [];

    for (let i = 0; i < 10; i++) {
      let createDie = {
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      }
      diceArray.push(createDie);
    }
    return diceArray;
  }

  const [dice, setDice] = useState(allNewDice())

  const diceElements = dice.map(die => (
    <Dice key={die.id} value={die.value} />
  ))

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