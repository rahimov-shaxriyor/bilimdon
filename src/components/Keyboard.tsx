type Props = {
    answer: string
    guessedLetters: string[]
    setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>
}

const Keyboard = ({answer, guessedLetters, setGuessedLetters}: Props) => {

  const letters = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"]

  const handleClick = (letter:string)=>{
    if (guessedLetters.includes(letter)) return; 
    setGuessedLetters([...guessedLetters, letter])
  }

  return (
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
  )
}

export default Keyboard