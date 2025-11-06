import { useEffect, useState } from "react"
import { URL } from "../constants/url"

const useGetData = <T,>(info:string) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

    const getData = async () => {
        setLoading(true)
        try {
            const res = await fetch(URL+info)
            if (!res.ok) {
                throw new Error('Xatolik ! ' + res.status)
            }
            const data = await res.json()
            setData(data)
        } catch (error:any) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

  return {data, error, loading}
}

export default useGetData