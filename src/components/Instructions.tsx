import useGetData from "../hooks/useGetData"

type InstructionsItem = {
  id: number
  title: string
  text: string
}

type Instructions = {
  data: InstructionsItem[]
}

const Instructions = () => {
  const {data, loading} = useGetData<Instructions>("documentation")

  if(loading){
    return (
        <div className='min-h-screen text-center'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    )
  }
  
  return (
    <div className="container min-h-screen flex items-center">
        <ul className="flex gap-7.5">
            {data && data.data.map((obj, i)=>(
                <li className="flex flex-col gap-7.5 text-center bg-white rounded-[1.875rem] py-15" key={i}>
                    <p className="text-blue text-[3.75rem]">0{obj.id}</p>
                    <p className="text-dark-navy text-[2.5rem]">{obj.title.toUpperCase()}</p>
                    <p className="text-gray text-[1.25rem]">{obj.text}</p>
                </li>

            ))}
        </ul>
    </div>
  )
}

export default Instructions