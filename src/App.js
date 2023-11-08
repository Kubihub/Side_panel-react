import { useState } from "react";
import { AiOutlineAudit } from "react-icons/ai";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
 import { Nav } from "./components/Nav"

const App =()=>{

  const[open, setOpen]=useState(true);

  

  return (
    <>
     <Nav/> 
     <div className="bg-600 w-full h-screen flex"> 
      <div className={`bg-dark-blue h-screen p-5 pt-8 ${open? "w-72":"w-20"} duration-300 relative`}
      
      >
      <BsFillArrowLeftCircleFill className="bg-light-white text-3xl rounded-full absolute -right-3 top-9 cursor-pointer
      border-dark-blue" onClick={()=> setOpen(!open)}
      />
      <div className="inline-fles">
        <AiOutlineAudit className="bg-amber-300 text-4xl
        rounded cursor-pointer block float-left mr-2"/>
        <h1 className={`text-white origin-left font-medium
        text-2xl duration-300 ${!open && "scale-0"}`}>GSET</h1>
      </div>

      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Homepage</h1>
      </div>
      </div>
    
    </>
  )
}
export default App