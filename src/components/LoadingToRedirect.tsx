import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const LoadingToRedirect = (props: Props) => {
 const [count,setCount] = useState(5)
 const navigate = useNavigate();

 useEffect(()=>{
     const interval = setInterval (()=>{
         setCount(currentCount => currentCount - 1)
     }, 1000)

     count === 0 && navigate("/auth")
     return () => clearInterval(interval)
 }, [count,navigate])


  return (
    <div>
        <p> Redirecting you in {count} sec for your Login</p>
    </div>
  )
}

export default LoadingToRedirect