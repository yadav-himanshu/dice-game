import { useState } from "react"

const SelectNumber = ({selectedNumber,setSelectedNumber, error,setError}) => {
    const numArray=[1,2,3,4,5,6]
    // const [selectedNumber, setSelectedNumber]=useState()

    const numberSelectHandler=(value)=>{
        setSelectedNumber(value)
        setError('')
    }

  return (
    <div className="flex flex-col items-center md:items-end">
        <p className=" text-red-800">{error}</p>
        <div className="flex gap-4">
            {
                numArray.map((value,index)=><div
                onClick={()=>numberSelectHandler(value)}
                 key={index} className={`border-black border font-semibold px-2 py-1 flex flex-1 justify-center items-center cursor-pointer ${value===selectedNumber?'bg-black text-white':'bg-inherit'} hover:bg-slate-800 hover:text-white`}  >{value}</div> )
            }
        </div>
        <p className="font-semibold">Select Number</p>
    </div>
  )
}

export default SelectNumber