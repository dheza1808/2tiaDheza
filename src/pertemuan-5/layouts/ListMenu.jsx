import React from "react";
import { MdDashboard } from "react-icons/md";
import { BsBorderStyle } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";

export default function ListMenu() {
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <div
            id="menu-1"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl 
            p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <MdDashboard className="mr-2" />
            Dashboard
          </div>
        </li>
        <li>
          <div
            id="menu-2"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl 
            p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <BsBorderStyle className="mr-2" />
            Orders
          </div>
        </li>
        <li>
          <div
            id="menu-3"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl 
            p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <RiCustomerService2Fill className="mr-2" />
            Customers
          </div>
        </li>
        <li>
          <div
            id="menu-4"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl 
            p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <AiFillSetting className="mr-2" />
            Settings
          </div>
        </li>
      </ul>
    </div>
  );
}
