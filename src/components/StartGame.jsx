const StartGame = ({toggle}) => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-slate-100 w-full max-w-6xl mx-auto p-6">
        <div className="flex-1 min-w-60">
            <img h-full w-full src="../images/dices.png" alt="" />
        </div>
        <div className="flex flex-col items-center md:items-end flex-1 gap-2">
            <p className="text-2xl md:text-4xl lg:text-7xl font-bold whitespace-nowrap">Dice Game</p>
            <button onClick={toggle} className="bg-black px-6 py-1 text-white cursor-pointer hover:bg-gray-300 hover:text-black transition duration-300 ease-in-out max-w-56 ">Play Now</button>
        </div>
    </div>
  )
}

export default StartGame