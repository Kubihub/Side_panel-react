import React from "react";
import DashboardContainer from "../components/DashboardContainer";

export default function HomePage() {
  return (
    <DashboardContainer>
      <div className="bg-white p-4 shadow">
        <h1 className="text-2xl font-semibold">Homepage</h1>
        <img
          className="w-full h-20 object-cover mt-3"
          src="./img.jpg"
          alt="logo"
        />
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Button
        </button>
      </div>
    </DashboardContainer>
  );
}
