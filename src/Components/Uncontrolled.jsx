import { useRef } from "react"

const Uncontrolled = ()=>{
    let name = useRef()
    let email = useRef()
    let salary = useRef()
    let id = useRef()
    let formhandling =(e)=>{
        e.preventDefault()
        let nameData = name.current.value
        let emailData = email.current.value
        let salData = salary.current.value
        let idData = id.current.value
        
        console.log(nameData)
        console.log(emailData);
        console.log(salData);
        console.log(idData);
    }
    return(
        <div>
            <label htmlFor="" >Name</label>
            <input type="text" name="" id="" ref={name} />
            <label htmlFor="" >Email</label>
             <input type="text" name="" id="" ref={email} />
             <label htmlFor="">Salary</label>
             <input type="number"  ref={salary}/>
             <label htmlFor="">Id</label>
             <input type="number"  ref={id}/>
             <button onClick={formhandling}>Submit</button>

        </div>
    )
}
export default Uncontrolled