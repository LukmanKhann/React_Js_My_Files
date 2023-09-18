import { Fragment, useState } from "react"
import component from "./userData27.json"

const FetchData= ()=>{
    let [user,Setuser] = useState(component)
    return(
        <div>
            {user.map((x)=>{
                return(
                    <Fragment key={x.id}>
                        <h1>{x.id}</h1>
                        <h1>{x.login}</h1>
                        <img src={x.avatar_url} alt="" />
                    </Fragment>
                )
            })}

        </div>
    )
}
export default FetchData