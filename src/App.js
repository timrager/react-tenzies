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
    <Dice
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)} 
    />
  ))

  const holdDice = (id) => {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  const rollDice = () => {
    setDice(checkDice => checkDice.map(die => {
      return die.isHeld ? die : {...die, id: nanoid(), value: Math.ceil(Math.random() *6)}
    }))
  }

  return (
      <main className="board">
        <div className="dice-container">
          {diceElements}
        </div>
      <div className="roll-btn" onClick={rollDice}> Roll </div>
      </main>
  );
};


export default App;