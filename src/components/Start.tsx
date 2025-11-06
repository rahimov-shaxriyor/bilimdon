import { Link } from "react-router-dom"

const Start = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
        <div className="w-full max-w-125 px-2.5 py-7.5 bg-blue-83opacity rounded-[.625rem] text-white flex flex-col items-center gap-10">
            <h1 className="font-bold text-[2.5rem]">Bilimdon</h1>
            <div className="flex flex-col items-center gap-7.5 w-full max-w-75">
                <Link to={'/category'}>
                    <img src="public/Group 45.svg" alt="play" width={150} height={150}/>
                </Link>
                <Link to={'/documentation'} className="cursor-pointer bg-blue px-16 py-2 rounded-[2.5rem] text-[1.375rem]">KO'RSATMALAR</Link>
            </div>
        </div>
    </div>
  )
}

export default Start