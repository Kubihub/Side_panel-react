import React from "react";
import DashboardContainer from "../components/DashboardContainer";

export default function EventsAndPrograms() {
  const dummyData = [
    {
      title: "The Coldest Sunset",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: "./img.jpg",
    },
    {
      title: "Workshop on React",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: "./img.jpg",
    },
    {
      title: "Angular Workshop",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: "./img.jpg",
    },
  ];

  return (
    <DashboardContainer>
      <div className="bg-white p-4 ">
        <h1 className="text-2xl font-semibold">Events And Programs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 my-10">
          {[...dummyData, ...dummyData].map((event, index) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg flex-box">
              <img
                className="object-cover w-full h-[200px]"
                src={event.image}
                alt="Sunset in the mountains"
              />
              <div className="px-9 py-9">
                <div className="font-bold text-xl mb-2">{event.title}</div>
                <p className="text-gray-700 text-base">{event.desc}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
               
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Button
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardContainer>
  );
}
