type Props = {
    question: string
    answer: string
    guessedLetters: string[]
}

const QuestionDisplay = ({question, answer, guessedLetters}:Props) => {
  return (
    <div className="flex flex-col gap-5 items-center">
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
    </div>
  )
}

export default QuestionDisplay