import React from "react";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsChevronDown,
  BsCalendar2EventFill,
  BsPersonWorkspace,
} from "react-icons/bs";
import { RiDashboardFill, RiSettings5Fill } from "react-icons/ri";
import { CgProfile, CgLogOut } from "react-icons/cg";
import {
  EVENTS_AND_PROGRAMS_URL,
  HOMEPAGE_URL,
  WORKSHOP_RECORDS_URL,
} from "../App";
import { Link } from "react-router-dom";

export default function DashboardContainer({ children }) {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const MENUS = [
    { title: "Home", url: HOMEPAGE_URL },
    {
      title: "Events & Programs",
      url: EVENTS_AND_PROGRAMS_URL,
      icon: <BsCalendar2EventFill />,
    },
    {
      title: "Workshop Records",
      url: WORKSHOP_RECORDS_URL,
      icon: <BsPersonWorkspace />,
    },
    {
      title: "Portfolio",
    },
    { title: "Profile", icon: <CgProfile /> },
    { title: "Settings", icon: <RiSettings5Fill /> },
    { title: "Logout", icon: <CgLogOut /> },
  ];

  return (
    <>
      <div className="bg-600 w-full h-screen flex bg-back-color">
        <div
          className={`bg-light-white h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-300 relative`}
        >
          <BsFillArrowLeftCircleFill
            className={`bg-light-white text-3xl rounded-full absolute -right-3 top-9 cursor-pointer
      border-dark-blue"
          ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />

          <div className="inline-flex">
            {/* --logo--section */}
            <img
              src="./gset_logo.png"
              alt="logo"
              className={`text-4xl object-contain rounded cursor-pointer block float-left mr-2 duration-500 
              ${open && "rotate-[]"}`}
            />
            <div>
              <h1
                className={`text-deep-blue origin-left mt-5
        text-2xl duration-300 ${!open && "scale-0"}`}
                style={{ fontSize: 16 }}
              >
                Hello Adiza
              </h1>
            </div>
          </div>
          <ul className="pt-2">
            {MENUS.map((menu, index) => (
              <Link to={menu.url}>
                <li
                  key={index}
                  className={`text-secondary-color hover:text-white text-sn flex
                items-center gap-x-6 cursor-pointer p-2
                hover:bg-light-blue rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown
                      className={`${submenuOpen && "rotate-180"}`}
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                    />
                  )}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="p-7">{children}</div>
      </div>
    </>
  );
}
