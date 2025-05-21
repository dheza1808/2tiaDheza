import { FcAbout } from "react-icons/fc"; 
import React from "react";
import { MdDashboard } from "react-icons/md";
import { BsBorderStyle } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${isActive ? 
        "text-hijau bg-green-200 font-extrabold" : 
        "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <MdDashboard className="mr-2" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-2" to="/orders" className={menuClass}>
            <BsBorderStyle className="mr-2" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/customers" className={menuClass}>
            <RiCustomerService2Fill className="mr-2" />
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-7" to="/users" className={menuClass}>
            <AiFillSetting className="mr-2" />
            Users
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-8" to="/about" className={menuClass}>
            <FcAbout className="mr-2" />
            About
          </NavLink>
        </li>


        {/* Tambahan Error Pages */}
        <li>
          <NavLink id="menu-4" to="/error400" className={menuClass}>
            <AiFillSetting className="mr-2" />
            Error 400
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-5" to="/error401" className={menuClass}>
            <AiFillSetting className="mr-2" />
            Error 401
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-6" to="/error403" className={menuClass}>
            <AiFillSetting className="mr-2" />
            Error 403
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
