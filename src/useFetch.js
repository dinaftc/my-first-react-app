import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data,setData] = useState(null);//update state 
    const[isPending,setIsPending]= useState(true);
    const [error,setError]= useState(null);
    
       
    useEffect(()=> {
    setTimeout(() =>{
        fetch(url)
        .then(res => { 
          if (!res.ok){throw Error('cant fetch data')
          }
          return res.json(); })
        .then((data) => {setData(data);
      setIsPending(false) 
      setError(null);})
      .catch(err =>{
            setIsPending(false);
           setError(err.message);})
        },100);
      },[url]);//fetching data 1st rander
   return {data,isPending,error}   
}
export default useFetch;