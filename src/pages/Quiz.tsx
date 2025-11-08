import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import { useParams } from "react-router-dom";
import QuestionDisplay from "../components/QuestionDisplay";
import Keyboard from "../components/Keyboard";
import { toast, ToastContainer } from "react-toastify";
import Modal from "../components/Modal";

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
  
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [avtiveAnswer, setActiveAnswer] = useState<number>(0)
  const question = data?.questions[avtiveAnswer].question
  const answer = data?.questions[avtiveAnswer].answer.toUpperCase()

  const [isOpen, setOpen] = useState<boolean>(false)

  useEffect(()=>{
    const isTrue = answer?.split("").every(l=>guessedLetters.includes(l) || l==" ")
    if(isTrue){
      if(data && data.questions.length-1 > avtiveAnswer){
        setTimeout(() => {
          setActiveAnswer(prev=>prev+1)
          setGuessedLetters([])
        }, 3000);
        toast.success("Tog'ri topdingiz!")
      }else{
        setOpen(true)
      }
    }
  }, [guessedLetters])
  
  if(loading){
    return (
        <div className='min-h-screen text-center'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    )
  }
  
  return (
    <div className="min-h-screen container flex flex-col justify-center gap-12.5">
        <ToastContainer autoClose={2500}/>
        <QuestionDisplay question={question} answer={answer} guessedLetters={guessedLetters}/>
        <Keyboard answer={answer} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters}/>
        <Modal isOpen={isOpen}/>
    </div>
  )
}

export default Quiz