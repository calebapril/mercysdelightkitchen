// const { default: axios } = require("axios")
// const { useState, useEffect, useMemo } = require("react")

// const useFetch = (url, method = "GET", options = {}) => {
//   const [data, setData] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const [refreshIndex, setRefreshIndex] = useState(0)

//   const optionsString = JSON.stringify(options)
//   const requestOptions = useMemo(()=>{
//     const opts = {...options}
//     if(method === 'POST' && !opts.data){
//       opts.data = {}
//     }
//     return opts
//   }, [method, optionsString])

//   useEffect(() => {
//     const apiCall = async () => {
//       setLoading(true)
//       setError(null)
//       try {
//         const {data: response } = await axios({
//           url,
//           method,
//           ...apiCall(requestOptions)
//         })

//         if(!response.success){
//           throw new Error(response.message)
//         }

//         setData(response)
//       } catch (error) {
//         setError(error.message)
//       }finally{
//         setLoading(false)
//       }
//     }

//     apiCall()

//   }, [url, refreshIndex, requestOptions])

//   const refetch = ()=>{
//     setRefreshIndex(prev => prev + 1)
//   }

//   return {data, loading, error, refetch}
// }

// export default useFetch






import axios from "axios"
import { useState, useEffect, useMemo } from "react"

const useFetch = (url, method = "GET", options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [refreshIndex, setRefreshIndex] = useState(0)

  // ✅ stable stringified options
  const optionsString = useMemo(() => JSON.stringify(options), [options])

  // ✅ derive request options safely from string
  const requestOptions = useMemo(() => {
    const opts = JSON.parse(optionsString)
    if (method === "POST" && !opts.data) {
      opts.data = {}
    }
    return opts
  }, [method, optionsString])

  useEffect(() => {
    let isMounted = true

    const apiCall = async () => {
      setLoading(true)
      setError(null)
      try {
        const { data: response } = await axios({
          url,
          method,
          ...requestOptions,
        })

        if (response && response.success === false) {
          throw new Error(response.message || "Request failed")
        }

        if (isMounted) setData(response)
      } catch (err) {
        if (isMounted) {
          setError(err.response?.data?.message || err.message)
        }
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    apiCall()

    return () => {
      isMounted = false
    }
  }, [url, method, requestOptions, refreshIndex])

  const refetch = () => {
    setRefreshIndex((prev) => prev + 1)
  }

  return { data, loading, error, refetch }
}

export default useFetch
