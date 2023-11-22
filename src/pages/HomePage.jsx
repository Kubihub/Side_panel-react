import React from "react";
import DashboardContainer from "../components/DashboardContainer";

export default function HomePage() {
  return (
    <DashboardContainer>
      <h1 className="text-2xl font-semibold">Homepage</h1>
      <div className=" bg-600 bg-light-white ">
          

         
          <div className="bg-600 w-full h-screen flex flex-col justify-center px-6 py-12 lg:px-8 bg-back-color ">
          <img
            className="mx-auto h-20 w-auto"
            src="./img.jpg"
            alt="logo"
          />  
          </div>

          {/* this is the section for the main information */}

          <div>

          

          </div>
         
      </div>
      
    </DashboardContainer> 
  );
}

