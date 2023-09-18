import { useState } from "react"

const Xcontrolled = ()=>{
    let [name,setName] = useState("")
    let[email,setEmail]= useState("")
    let [sal,setSal] = useState("")
    let nameData = (e)=>{
        setName(e.target.value)

    }
    let emailData = (e)=>{
        setEmail(e.target.value)
    }
    let salData = (e)=>{
        setSal(e.target.value)
    }
    let formhandle = ()=>{
        console.log(name,email,sal);
    }
    return(
        <div>
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" value={name} onChange={nameData} /> 
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" value={email} onChange={emailData} />
             <label htmlFor="">Sal</label>
            <input type="text" name="" id="" value={sal} onChange={salData} />
            <button onClick={formhandle}>Submit</button>

        </div>
    )
}
export default Xcontrolled