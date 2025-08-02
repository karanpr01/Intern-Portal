import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import Themetoggle from "./themetoggle";


const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  const menuItems = [
    { label: "🏠 Overview", href: "/dashboard" },
    { label: "🎁 Rewards", href: "/rewards" },
    { label: "🏆 Leaderboard", href: "/leaderborad" },
    { label: "⚙️ Settings", href: "/settings" },
    { label: "🚪 Logout", href: "/" },
    { type: "themeToggle" }
  ];


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      <div className="lg:hidden p-4">
        <button onClick={() => setOpen(!open)} className="text-gray-700   focus:outline-none">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      {open && <div className="fixed inset-0 bg-black bg-opacity-30 z-10 lg:hidden" />}


      <div
        ref={sidebarRef}
        className={`fixed z-20 top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-md transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:block`}
      >

        <div className="flex items-center justify-between p-4 border-b lg:hidden">
          <h1 className="font-bold text-xl">Intern Portal </h1>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>


        <div className="hidden lg:flex items-center justify-between p-6 border-b">
          <h1 className="font-bold text-xl">Intern Portal</h1>
          <Themetoggle />
        </div>



        <nav className="p-4 space-y-2 h-screen">
          {menuItems.map((item, index) => {
            if (item.type === "themeToggle") {
         
              return (
                <div
                  key={index}
                  className="px-4 py-2 flex justify-between items-center rounded text-gray-700 dark:text-gray-200  transition lg:hidden"
                >
                  {/* <span>🌓 Theme</span> */}
                  <Themetoggle />
                </div>
              );
            }

            const isActive = location.pathname === item.href;
            return (
              <a
                key={index}
                href={item.href}
                className={`block px-4 py-2 rounded transition ${isActive
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-gray-700 hover:bg-blue-600 hover:text-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* <div className="p-4 border-t flex justify-center lg:hidden">
          <Themetoggle />
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
