import axios from "axios"
import { useEffect, useState } from "react"

const FetchData06 = ()=>{
    let [result,setResult]  = useState([])
    useEffect(()=>{
        axios.get("https://api.github.com/users").then((response)=>{
            console.log("DATA IS FOUND SUCCESSFULLY");
            console.log(response.data);
            setResult(response.data)
        }).catch(()=>{
            console.log(" DATA IS NOT FOUND");
        })
    },[])
    return(
        <div>
            {result.map((x)=>{
                return(
                    <div>
                        <h1>{x.id}</h1>
                        <h1>{x.login}</h1>
                    </div>
                )
            })}

        </div>
    )
}
export default FetchData06