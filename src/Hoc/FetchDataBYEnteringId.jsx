import { useEffect, useState } from "react"
import axios from "axios"
const FetchDataBYEnteringId = ()=>{
    let [content,setContent] = useState([])
     let [id,setId] = useState("")
     let [btn,setBtn] = useState("")
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`)
        .then((Response)=>{
            console.log("data is successfully fetched");
            console.log(Response.data); 
            setContent(Response.data)
        }).catch(()=>{
            console.log("data is not found");
        })
    },[btn])
    let idData = (e)=>{
        setId(e.target.value)
        
    }
    let formhandle =()=>{
        setBtn(id)
    }
    return(
        <div>
            {/* {Content.map((x)=>{
                return(
                    <div>
                        <h1>{x.id}</h1>
                        <h1>{x.title}</h1>
                    </div>
                )
            })} */}
            <label htmlFor="">Enter Id</label>
            <input type="text" value={id} onChange={idData}/>
            <button onClick={formhandle}>Submit</button>
            <h1>{content.title}</h1>
            <h1>{content.id}</h1>
 

        </div>
    )
}
export default FetchDataBYEnteringId