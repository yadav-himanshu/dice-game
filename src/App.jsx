import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'
function App() {

  const [isGameStarted, setIsGameStarted]=useState(false)

  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev)
  }

  return (
    <div className='bg-orange-200 h-screen w-screen flex justify-center items-center'>
      {
        isGameStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay}/>
      }
    </div>
    
  )
}

export default App
