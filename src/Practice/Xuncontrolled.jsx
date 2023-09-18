import { useRef, useState } from "react"

const Xuncontrolled = ()=>{
    let name = useRef()
    let email = useRef()
    let sal = useRef()
    let [result,setResult] = useState("")
    let formhadle = ()=>{
        let nameData = name.current.value
        let emailData = email.current.value
        let salData = sal.current.value
        console.log(nameData);
        console.log(emailData);
        console.log(salData);
        setResult(nameData,emailData,salData)
        
    }
    return(
        <div>
            <label htmlFor="">Name</label>
            <input type="text" ref={name}/>
             <label htmlFor="">Email</label>
            <input type="text" ref={email}/>
             <label htmlFor="">Sal</label>
            <input type="text" ref={sal}/>
            <button onClick={formhadle}>Submit</button>
            <h1>{result}</h1>

        </div>
    )
}
export default Xuncontrolled