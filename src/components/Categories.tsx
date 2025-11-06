import { Link } from 'react-router-dom';
import useGetData from '../hooks/useGetData'

type CategoryItem = {
  id: number;
  name: string;
};

type Category = {
  data: CategoryItem[];
};

const Categories = () => {
  const {data, loading} = useGetData<Category>("categories")

  if(loading){
    return (
        <div className='min-h-screen text-center'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    )
  }
  
  return (
    <div className='min-h-screen container flex items-center'>
        <ul className='w-full grid grid-cols-3 gap-7.5'>
            {data && data.data.map((c, i)=>(
                <li className='bg-blue text-center  rounded-[1.875rem] cursor-pointer' key={i}>
                    <Link to={"/quiz/"+c.id} className='block py-12.5 text-[2.5rem] cursor-pointer'>{c.name.toUpperCase()}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Categories