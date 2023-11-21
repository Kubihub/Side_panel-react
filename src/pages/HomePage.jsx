import React from "react";
import DashboardContainer from "../components/DashboardContainer";

export default function HomePage() {
  return (
    <DashboardContainer>
      <h1 className="text-2xl font-semibold">Homepage</h1>
      <div className=" bg-600 bg-light-white ">
          <h1>
            This is the main page
          </h1>
          <div className="bg-600 w-full h-screen flex bg-back-color">
            
          </div>
      </div>
      <div>
            <img src="../images/img.jpg" alt="" className="jpg" />
            </div>
    </DashboardContainer> 
  );
}
