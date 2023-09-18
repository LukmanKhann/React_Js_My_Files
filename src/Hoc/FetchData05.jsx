import { useEffect, useState } from "react"
import axios from "axios"
const FetchData05 = ()=>{
    let [Content,setContent] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((Response)=>{
            console.log("data is successfully fetched");
            console.log(Response.data);
            setContent(Response.data)
        }).catch(()=>{
            console.log("data is not found");
        })
    },[])
    return(
        <div>
            {Content.map((x)=>{
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
export default FetchData05