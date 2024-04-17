import React from "react";
import DashboardContainer from "../components/DashboardContainer";

export default function HomePage() {
  return (
    <DashboardContainer>
      <div className="bg-white p-4 shadow">
        <h1 className="text-2xl font-semibold">Library</h1>
        <div className="grid-flow-row">
        <img
          className="w-full h-20 object-cover mt-3"
          src="./img.jpg"
          alt="logo"
        />
      </div>
      <div>
      <img
          className="w-20 h-20 object-cover mt-3 grid-flow-row "
          src="./img.jpg"
          alt="logo"
          
        />
        <div></div>
        <button className="bg-white p-4 shadow grid-flow-row">
          Contributions
        </button>
        </div>
       
      </div>
    </DashboardContainer>
  );
}
