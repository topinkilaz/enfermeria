//ref:usefecth customhooks
import { useEffect, useState } from "react"


export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading:true,
    hasError:false,
    error:null,
  })

  useEffect(() => {
  
    getFetch()
  
}, [url])

const setLoadingState=()=>{
    setState(
        {
            data:null,
            isLoading:true,
            hasError:false,
            error:null,
        }
    )
}




  const {data,isLoading,hasError,error}=state;

  const getFetch=async()=>{

   setLoadingState();
    const resp=await fetch(url)

    //await new Promise(resolve=>setTimeout(resolve,1000));
    //si resp no se cumple hace lo siguiente 
    if(!resp.ok){
        setState({
            data:null,
            isLoading:false,
            hasError:true,
            error:{
                code:resp.status,
                message:resp.statusText,
            }
        });
        return;
        
    }
    //si no ocurre ni un error 
    const data=await resp.json()
    
    setState({
        data:data,
        isLoading:false,
        hasError:false,
        error:null,
    })
    

  

  }





  return{
    data,
    isLoading,
    hasError,
    error,
  }
}


