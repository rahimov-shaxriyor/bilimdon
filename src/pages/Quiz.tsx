import { useState } from "react";
import useGetData from "../hooks/useGetData";
import { useParams } from "react-router-dom";

type Quiz = {
  id: number
  name: string
  questions: [{
    id: number
    answer: string
    question: string
  }]
}

const Quiz = () => {

  const {id} = useParams()
  const {data, loading} = useGetData<Quiz>("questions/"+id)
  console.log(data);
  

  const letters = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"]
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [avtiveAnswer, setActiveAnswer] = useState(0)
  const question = data?.questions[avtiveAnswer].question
  const answer = data?.questions[avtiveAnswer].answer.toUpperCase()
  

  const handleClick = (letter:string)=>{
    if (guessedLetters.includes(letter)) return; 
    setGuessedLetters([...guessedLetters, letter])
  }

  const isTrue = answer?.split("").every(l=>guessedLetters.includes(l) || l==" ")
  if(isTrue){
    setActiveAnswer(prev=>prev+1)
    setGuessedLetters([])
  }
  
  if(loading){
    return (
        <div className='min-h-screen text-center'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    )
  }
  
  
  return (
    <div className="min-h-screen container flex flex-col items-center justify-center gap-12.5">
        <p className="text-[1.875rem]">{question}</p>
        <div className="flex gap-10">
            {answer?.split(" ").map((el, i)=>(
              <div className="w-full" key={i}>
                  <ul className="flex gap-2.5">
                      {el.toUpperCase().split("").map((l, i)=>(
                          <li className={`word ${guessedLetters.includes(l) ? "bg-blue" : "bg-blue-25opacity"}`} key={i}>{guessedLetters.includes(l) ? l : ""}</li>
                      ))}
                  </ul>
              </div>
            ))}
        </div>

        <div className="flex flex-col items-center gap-5">
            {letters.map((el, i)=>(
                <div key={i}>
                    <ul className="flex gap-5">
                        {el.split("").map((l, i)=>(
                          <li key={i}>
                              <button onClick={()=>handleClick(l)} className={`keyboard ${answer?.toUpperCase().includes(l) && guessedLetters.includes(l) ? "bg-white-25opacity" : "bg-white"}`}>{l}</button>
                          </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Quiz