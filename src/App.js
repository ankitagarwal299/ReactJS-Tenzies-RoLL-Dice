import "./styles.css";
import React, { useEffect, useState } from "react";
import Die from "./Die";

/*Tutorail of this Game: https://www.youtube.com/watch?v=bMknfKXIFA8&t=39038s */

function randomNumbers() {
  return Array.from({ length: 10 }, (item, index) => ({
    value: Math.ceil(Math.random() * 6),
    isHeld: false
  }));
}

function generateDie() {
  return { value: Math.ceil(Math.random() * 6), isHeld: false };
}

export default function App() {
  const [die, setDie] = useState(randomNumbers());
  const [tenzies, setTenzies] = useState(false);

  const diceElements = die.map((item, index) => (
    <Die
      key={index}
      value={item.value}
      isHeld={item.isHeld}
      diceClicked={() => diceClicked(index)}
    ></Die>
  ));

  function rollDice() {
    if (tenzies == true) {
      /*Start New Game scenario */
      setTenzies(false);
      setDie(randomNumbers());
    }

    return setDie((olDie) =>
      olDie.map((die, index) => {
        if (die.isHeld) {
          return die;
        } else {
          return generateDie();
        }
      })
    );
  }

  function diceClicked(index) {
    setDie((oldDie) =>
      oldDie.map((die, i) => {
        if (i === index) {
          return { ...die, isHeld: !die.isHeld };
        }

        return die;
      })
    );
  }

  useEffect(() => {
    let allHeld = die.every((die) => die.isHeld);
    let firstVal = die[0];
    let allSame = die.every((die) => die.value === firstVal.value);

    if (allHeld && allSame) {
      console.log(allHeld, allSame);
      setTenzies(true);

      return;
    }

    // if(){
    //   setDie(randomNumbers())
    // }
  }, [die]);

  return (
    <div className="App">
      <main>
        <h1>dsdsasd {tenzies}</h1>
        <div className="container">{diceElements}</div>
        {tenzies}
        <button onClick={rollDice} className="roll-btn">
          {tenzies ? `New Game ${tenzies}` : `ROLL ${tenzies}`}
        </button>
      </main>
    </div>
  );
}
