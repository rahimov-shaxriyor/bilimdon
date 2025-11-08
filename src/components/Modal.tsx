import { Link } from "react-router-dom"

const Modal = ({isOpen}:{isOpen: boolean}) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-[#000a] flex items-center justify-center">
        <div className='bg-white w-full max-w-125 p-5 rounded-[.625rem] flex flex-col items-center gap-[1.25rem]'>
            <p className="text-blue text-[1.875rem]">Siz g'olib bo'ldingiz!</p>
            <Link className="btn btn-primary text-[1.875rem]" to={"/category"}>Boshidan o'ynash</Link>
        </div>
    </div>
  )
}

export default Modal