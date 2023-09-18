import { useState } from "react"

const Controlled3 = ()=>{
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    
    let nameData = (e)=>{
        setName(e.target.value)
    }
    let emailData = (e)=>{
        setEmail(e.target.value)
    }
    let formHandling = (e)=>{
        // console.log(e);
        // e.preventDefault()
        console.log(name,email);
       
    }

    return(
        <div>
            <h1>Controlled Form</h1><br />
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={nameData} />
            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={emailData} />
            <button onClick={formHandling}>Sumbit</button>
            
        </div>
    )
}
export default Controlled3