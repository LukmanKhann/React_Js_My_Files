import Nav from "./Components/Nav"
import Content from "./Components/Content"
import Footer from "./Components/Footer"
import Classbased from "./Components/Classbased"
import Prop from "./Components/Prop"
import Child from "./Components/Child"
import Assigenment from "./Components/Assignment"
import X from "./Practice/X"
import State from "./Components/States"
import Hwork from "./Components/Hwork"
import Task1 from "./Components/Task1"
import Statearr from "./Components/Statearr"
import FetchData from "./Components/FetchData27"
import Style from "./Components/Style28"
// import Spotify28 from "./Components/Assignments/Spotify28"
import Style30 from "./Components/Style30"
import "./global.css"
import Reference from "./Components/Reference"
import Theme31 from "./Components/Theme31"
import Uncontrolled from "./Components/Uncontrolled"
import Hotstar from "./Components/Assignments/Hotstar"
import Class01 from "./Components/Class01"
import Tesla from "./Components/Assignments/Tesla"
import Zee5 from "./Components/Assignments/Zee5"
import Goodtea from "./Components/Assignments/Goofdtea"
import Controlled3 from "./Components/Controlled3"
import Work3 from "./Components/Work03"
import A from "./Hoc/A"
import B from "./Hoc/B"
import SideEffect05 from "./Hoc/SideEffects05"
import FetchData05 from "./Hoc/FetchData05"
import FetchData06 from "./Hoc/FetchData06"
import FetchDataBYEnteringId from "./Hoc/FetchDataBYEnteringId"
import Alpha from "./Components/Usecontext07/Alpha"
import { createContext } from "react"
import Beta from "./Components/Usecontext07/Beta"
import Memo from "./Components/Usecontext07/Memo"
import Main from "./Components/Callback/Main"
import PassData from "./Practice/PassData"
import Inc from "./Practice/Inc"
import AddSub from "./Practice/AddSubMulti"
import Spotify from "./Components/Assignments/Spotify28"
import FindCoder from "./Spa/FindCoder"
  import Explore from "./Spa/Explore"
import Hire from "./Spa/Hire"
import Dev from "./Spa/Dev"
import Challanges from "./Spa/Challanges"
import Prorpsarray from "./Practice/Propsarray"
import Xstates from "./Practice/Xstates"
import Xuncontrolled from "./Practice/Xuncontrolled"
import Xcontrolled from "./Practice/Xcontrolled"
import Xfetchdata from "./Practice/Xfetchdata"
import Xmemo from "./Practice/Xmemo"
import C from "./Practice/C"
import Xmain from "./Practice/Xmain"
import XhocA from "./Practice/XhocA"
import Xuseeffectfetchdata from "./Practice/Xuseeffectfetchdata"
import Xfetchdatausingid from "./Practice/Xfetchdatausingid"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Garage from "./Pro1/Garage"
import Menu from "./Pro1/Menu"
import Contact from "./Pro1/Contact"
import About from "./Pro1/About"
import Home from "./Pro1/Home"
import K from "./Pro1/K"
import Mul from "./Pro1/Mul"
import Mul2 from "./Pro1/Mul2"
import Pro from "./Predtice2/Pro"
import Stat from "./Predtice2/Stat"
import Increee from "./Predtice2/Increee"
import M from "./Predtice2/M"






export let userData = createContext()
const App=()=> {
  // let person = {
  //   name : " lukman",
  //   id : 123,
  //   sal : " 7lpa",
  //   address : {
  //     city : "KGF",
  //   },
  //   skills : ["coding","contract","Fighting"]
  // }
  // let Employee = [
  //   {name : "HTML"},  
  //   {name : "CSS"},
  //   {name : "JS"}
  // ]

  let details = {
    name : "lukman",
    id : 456,
    address :{
      state : "chhattisgarh",
      city : "sitapur",
      pincode : 497111
    },
    poem : ["little","drops","water","grans"]

  }
    
    return(
        <div>
        
      {/* <Nav/>
      <Content/>
      <Footer/>
      <Classbased/> */}
      {/* <Prop data=" world"   />
      <Prop data=" galaxy"   />
      <Prop data=" universe"   />
      <Prop data=" Batman"   />
      <Prop data=" Bete"   />
      <Prop data=" Who  "   /> */}
        {/* <Child data = " Bye"/>
        <Child component = " Hello My Friend"/> */}



        {/* <Child data ={[1,"hii",undefined,true]}/> // Passing the arrays*/}

        {/* <Child data= {person} /> */}
        {/* <Child data= {Content[0]}/>
        <Child data= {Content[1]}/>
        <Child data= {Content[2]}/> */}

        {/* <Assigenment data = {Employee}/> */}
        {/* <X data = "hi iam lukman khan"/>     passing the data */}
        {/* <X data = {details}/>    passing the object */}
        {/* <State/> */}
        {/* <Hwork/> */}
        {/* <Task1/> */}
        {/* <Statearr/> */}
        {/* <FetchData/> */}
        {/* <Style/> */}
        {/* <Spotify/> */}
        {/* <Style30/> */}
        {/* <Reference/> */}
        {/* <Theme31/> */}
        {/* <Uncontrolled/> */}
        {/* <Hotstar/> */}
        {/* <Class01/> */}
        {/* <Tesla/> */}
        {/* <Zee5/> */}
        {/* <Goodtea/> */}
        {/* <Controlled3/> */}
        {/* <Work3/> */}
        
          {/* hoc */}

          {/* <A/> */}
          {/* <B/> */}
          {/* <SideEffect05/> */}
       
        {/* <FetchData05/> */}
        {/* <FetchData06/> */}
        {/* <FetchDataBYEnteringId/> */}
        {/* <Alpha/> */}
        {/* <userData.Provider value = "hii">
          <Beta/>
        </userData.Provider> */}
        {/* <Memo/> */}
        {/* <Main/> */}
{/* <FindCoder/> */}
{/* <BrowserRouter>
        <FindCoder/>
        <Routes>
          <Route path="/comp1" element ={<Explore/>}></Route>
          <Route path="/comp2" element ={<Hire/>}></Route>
          <Route path="/comp3" element ={<Dev/>}></Route>
          <Route path="/comp4" element ={<Challanges/>}></Route>
        </Routes>  
        </BrowserRouter> */}







        {/* Practice folder content here (iam writing only practice folder programs here) */}
        {/* <PassData data = {details}/> */}
        {/* <Inc/> */}
        {/* <AddSub/> */}
        {/* <AddSubMulti/> */}
        {/* <Prorpsarray data = {[{
          name : "lukman",
          age : 20,
          mobile : 23456,
          yop : 2022,
          address : "sitapur surguja chhattisgarh"
        },
        {
          role : "java full stack web developer",
          company : "tcs",
          sal : "10000000"
        }]}/> */}

        {/* <X data = "hello"/> */}
        {/* <Xstates/> */}
        {/* <Xuncontrolled/> */}
        {/* <Xcontrolled/> */}
        {/* <Xfetchdata/> */}
        {/* <Xmemo/> */}
        {/* <userData.Provider value={"betheeee"}>
          <C/>
        </userData.Provider> */}
        {/* <Xmain/> */}
        {/* <XhocA/> */}
        {/* <Xuseeffectfetchdata/> */}
        {/* <Xfetchdatausingid/>  */}
        {/* <BrowserRouter>
        <Garage/>
        <Routes>
          <Route path="/home" element = {<Home/>} ></Route>
          <Route path="/contact" element= {<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        
        </BrowserRouter> */}
        {/* <K/> */}
        {/* <Mul/> */}
        {/* <Mul2/> */}

 

        {/* PRACTICE 2 */}
        {/* <Pro data = "hello"/> */}
        {/* <Pro data = {{name: "lukman",id : 456,system :"lenovo"}}/> */}
        {/* <Pro data = {["lukman" ,5654,undefined,null,45,"singh"]}/> */}
        {/* <Pro data = {["lukman" ,"khan",{name : "lol" ,id :456, city : "sitapur",
                          address : {
                            pincode : 45986,
                            statee : "chhattisgarh",
                            district : "surguja"
                          },  
                          Number :[45896,126,1122]    
      }]}/> */}

     {/* <Stat/> */}
     {/* <Increee/> */}
     {/* <M/> */}
    
        
        </div>
        

    )
}
export default App