import axios from "axios"
import { useEffect, useState } from "react"


export default function useFetch(url) {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(0)

    const isRefresh = () => setRefresh(prev => prev == 0 ? 1 : 0)

    useEffect(() => {


        (async function () {

            try {
                // setLoading(true)
                
                const response = await axios.get(url)
                
                setData(response.data.data)

            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)

            }

        })()

        }, [url, refresh])




    return { data, error, isRefresh, loading }

}