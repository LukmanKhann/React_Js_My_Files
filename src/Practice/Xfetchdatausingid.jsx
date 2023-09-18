import axios from "axios"
import { useEffect, useState } from "react"

const Xfetchdatausingid = () => {
    let  [content,setContent] = useState([])
    let [id,setId] =useState("")
    let [btn,setBtn] =useState("")
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`).then((Response)=>{
            console.log("data fetched successfull");
            console.log(Response.data);
            setContent(Response.data)
        }).catch(()=>{
            console.log("data not found something went wrong");
        })
    },[btn])
    let idData = (e)=>{
        setId(e.target.value)
    }
    let formhandle = ()=>{
        setBtn(id)

    }
  return (
    <div>
        {/* {content.map((x)=>{
            return(
                <div>
                    <h1>{x.id}</h1>
                    <h1>{x.title}</h1>
                </div>
            )
        })} */}
        <label htmlFor="">Id</label>
        <input type="text" value={id} onChange={idData}/>
        <button onClick={formhandle}>Submit</button>
        <h1>{content.id}</h1>
        <h1>{content.title}</h1>
      
    </div>
  )
}

export default Xfetchdatausingid