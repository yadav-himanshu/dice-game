import { useState } from "react"


function RollDice({currentDice, rollDice}) {

  // const [currentDice, setCurrentDice]=useState(1)

  // const generateRandomNumber=(min,max)=>{
  //        return Math.floor( Math.random()*(max-min)+min)
  // }
  // const rollDice=()=>{
  //   const randomNumber=generateRandomNumber(1,7);
  //   setCurrentDice(randomNumber)
  //   console.log(randomNumber)
  // }

  return (
    <div className="flex flex-col justify-center items-center">
      <div onClick={rollDice} className="w-full max-w-24">
        <img className="cursor-pointer h-full w-full" src={`../images/dice/dice_${currentDice}.png`} alt="dice-1" />
      </div>
      <p className="text-lg font-medium text-center">Click on the Dice to roll</p>
    </div>
  )
}

export default RollDice