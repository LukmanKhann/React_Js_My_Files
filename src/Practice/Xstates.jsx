import { useState } from "react"

const Xstates = ()=>{
    let [data,setData] = useState("lukman khan") 
    let [data1,setData1] = useState({name : "lukman", yop: 2233, address:"sitapur"})
    let [data2,setData2]= useState(["lukmna",2022,20,"sitapur"])
    return(
        <div>
            {data} <br />
            {data1.yop} <br />
            {data1.address} <br />
            {data2[0]} <br />

            {/* in order to print all the array datas and this map function only use in array kind of states */}
            {data2.map((x)=>{
                return(
                    <div>
                        {x}

                    </div>
                )
            })}

        </div>
    )
}
export default Xstates