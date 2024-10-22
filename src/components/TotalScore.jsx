const TotalScore = ({score}) => {
  return (
    <div className="w-52 flex flex-col items-center justify-center">
        <p className="text-7xl font-bold">{score}</p>
        <p className="text-xl">Total Score</p>
    </div>
  )
}

export default TotalScore