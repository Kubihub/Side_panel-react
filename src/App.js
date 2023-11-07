import { useState } from "react";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
// import { Nav } from "./components/Nav"

const App =()=>{

  const[open, setOpen]=useState(true);

  

  return (
    <>
    {/* <Nav/> */}
    {/* <div className="bg-600 w-full h-screen"> */}
    <div className="flex">
      <div className={`bg-dark-blue h-screen p-5 pt-8 ${open? "w-72":"w-20"} duration-300 relative`}>
      <BsFillArrowLeftCircleFill className="bg-white text-dark-purple text-3xl rounded-full absolute-right top-9 mx-60 bg-white cursor-pointer
      border light-white" onClick={()=> setOpen(!open)}
      />
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Homepage</h1>
      </div>
      </div>
    {/* </div> */}
    </>
  )
}
export default App