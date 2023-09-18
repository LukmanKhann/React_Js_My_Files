import axios from "axios"
import { useEffect, useState } from "react"

const Xuseeffectfetchdata = () => {
    let [content,setContent] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((Response)=>{
            console.log("data is fetched successfull");
            console.log(Response.data);
            setContent(Response.data)
        })
    },[])
  return (
    <div>
        {content.map((x)=>{
            return(
                <div>
                    <h1>{x.id}</h1>
                    <h1>{x.title}</h1>
                </div>
            )
        })}
      
    </div>
  )
}

export default Xuseeffectfetchdata