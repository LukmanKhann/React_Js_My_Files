import { Fragment, useState } from "react"
import content from "./DataJson.json"

const Xfetchdata = ()=>{
    let [userData,serUserdata] = useState(content)
    return(
        <div>
            {userData.map((x)=>{
                return(
                    <Fragment>
                        <h1>{x.Name}</h1>
                        <h1>{x.Pets[1]}</h1>
                        <h1>{x.Address["current Address"]}</h1>
                        <h1>{x.Address["Permanent address"]}</h1>
                    {/* <h1>{x.login}</h1>
                    <img src={x.avatar_url} alt="" /> */}
                   
                    </Fragment>
                    
                )
            })}

        </div>
    )
}
 export default Xfetchdata