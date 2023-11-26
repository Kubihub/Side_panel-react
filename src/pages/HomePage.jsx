import React from "react";
import DashboardContainer from "../components/DashboardContainer";

export default function HomePage() {
  return (
    <DashboardContainer>
      <div className="bg-white p-4 shadow">
        <h1 className="text-2xl font-semibold">Homepage</h1>
        <img className="w-full h-20 object-cover mt-3" src="./img.jpg" alt="logo" />
      </div>
    </DashboardContainer>
  );
}
