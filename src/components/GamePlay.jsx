import { useState } from "react"
import RollDice from "./RollDice"
import SelectNumber from "./SelectNumber"
import TotalScore from "./TotalScore"
import Rules from "./Rules"

const GamePlay = () => {
    const [selectedNumber, setSelectedNumber]=useState()
    const [currentDice, setCurrentDice]=useState(1)
    const [score, setScore]=useState(0)
    const[error,setError]=useState()
    const [toggleRules, setToggleRules]=useState(false)


    const generateRandomNumber=(min,max)=>{
        return Math.floor( Math.random()*(max-min)+min)
 }
 const rollDice=()=>{
     if(!selectedNumber){
        setError('Please select a number')
        return
     }

   const randomNumber=generateRandomNumber(1,7);

   setCurrentDice(randomNumber)
   console.log(randomNumber)


   if(selectedNumber===randomNumber){
    setScore((prev)=>prev+randomNumber)
   }
   else{
    setScore((prev)=>prev-2)
   }
   setSelectedNumber(undefined)
 }

 const resetScore=()=>{
    setScore(0)
 }

 const showRules=()=>{
    setToggleRules(prev=>!prev)
 }

  return (
    <div className="flex gap-3 flex-col items-center bg-gray-50 w-full max-w-6xl mx-auto p-6">
        <div className="flex justify-center md:justify-between w-full flex-wrap items-center gap-3">
            <TotalScore score={score}/>
            <SelectNumber selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError} />
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice} />
        <div className="flex flex-col gap-2 w-full items-center">
            <button onClick={resetScore} className="bg-black border-black border text-white px-5 py-1 w-full max-w-52">Reset Score</button>
            <button onClick={showRules} className="bg-white text-black border-black border px-5 py-1 w-full max-w-52">{toggleRules ? "Hide Rules" : "Show Rules"}</button>
        </div>
        {toggleRules && <Rules />}
    </div>
  )
}

export default GamePlay