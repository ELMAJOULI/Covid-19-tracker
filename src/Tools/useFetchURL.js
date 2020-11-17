import {useEffect,useState} from "react";



export const useFetchURL = (url)=>{
    const [data,setData] = useState(null);
  
    const load = async() =>{ 
        try{
            const result = await fetch(url).then(r=> r.json());
            setData(result);
            console.log(result);
        }catch(err){
            console.log(err);
        }
    }
   
   
    useEffect(()=>{
          load()
       },[url]);
    return data;
}
