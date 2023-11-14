import { useState } from "react";
import { AiOutlineAudit } from "react-icons/ai";
import { BsFillArrowLeftCircleFill, BsSearch,BsChevronDown,BsCalendar2EventFill,BsPersonWorkspace } from "react-icons/bs";
import { Nav } from "./components/Nav";
import { RiDashboardFill,RiSettings5Fill } from "react-icons/ri";
import { CgProfile,CgLogOut } from "react-icons/cg";

const App = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard" },
    { title: "Events & Programs", icon:<BsCalendar2EventFill/> },
    { title: "Workshop Records", spacing: true, icon: <BsPersonWorkspace/>},
    {
      title: "Portfolio",
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 1" },
        { title: "Submenu 1" },
      ],
    },
    { title: "Profile", spacing: true, icon:<CgProfile/>},
    { title: "Settings", icon: <RiSettings5Fill/>},
    { title: "Logout", icon: <CgLogOut/>},
  ];

  return (
    <>
      <Nav />
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
            <AiOutlineAudit
              className={`bg-amber-300 text-4xl
        rounded cursor-pointer block float-left mr-2 duration-500 ${
          open && "rotate-[360deg]"
        }`}
            />
            <h1
              className={`text-white origin-left font-medium
        text-2xl duration-300 ${!open && "scale-0"}`}
            >
              GSET
            </h1>
          </div>
          <div
            className={`flex items-center rounded-md
          bg-light-blue mt-6 ${!open ? "px-2.5" : "px-4"}py-2`}
          >
            <BsSearch
              className={`text-white text-lg block ml-2
            float-left cursor-pointor ${open && "mr-2"}`}
            />
            <input
              type={"search"}
              placeholder="Search"
              className={`text-base bg-transparent w-full text-white
            focus:outline-none ${!open && "hidden"}`}
            />
          </div>
          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-black-300 text-sn flex
                items-center gap-x-4 cursor-pointer p-2
                hover:bg-light-blue rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon :<RiDashboardFill />}
                  </span> 
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                  <BsChevronDown className={`${submenuOpen && "rotate-180"}`}
                   onClick={() => setsubmenuOpen(!submenuOpen)}/>
                  )}
                </li>
                {menu.submenu && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li key={index} className="text-black-300 text-sn flex
                      items-center gap-x-4 cursor-pointer p-2 px-5
                      hover:bg-light-blue rounded-md">
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )
                }
              </>
            ))}
          </ul>
        </div>
        <div className="p-7">
          <h1 className="text-2xl font-semibold">Homepage</h1>
        </div>
      </div>
    </>
  );
};
export default App;
