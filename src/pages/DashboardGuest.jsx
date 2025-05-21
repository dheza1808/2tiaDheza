import { IoMdContact } from "react-icons/io"; 
import { AiFillContacts } from "react-icons/ai"; 
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function DashboardGuest() {
  return (
    <div id="dashboard-container">
      <PageHeader
        title="Dashboard"
        breadcrumb={["Dashboard", "Order List", "Test"]}
      >
        <button
          id="add-button"
          className="bg-hijau text-white px-4 py-2 rounded-lg mb-4"
          onClick={() => setShowCustomerForm(true)}
        >
          About
        </button>
        <button
          id="export-button"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setShowOrderForm(true)}
        >
          Kontak
        </button>
      </PageHeader>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <div
                id="add-menu-button.span"
                className="button.span text-gray-600 flex items-center"
              ></div>
              <span>Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar"
            className="w-20 rounded-full"
            src="https://avatar.iran.liara.run/public/28"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Guest Dashboard
        </span>
        <p id="footer-brand" className="font-light text-gray-400">
            Info Kontak :
            <IoMdContact className="mr-2"/>6666 7777 1111
            
        </p>
      </div>
    </div>
  );
}
