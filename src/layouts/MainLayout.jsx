import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header"; 
import PageHeader from "../components/PageHeader";

export default function MainLayout() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />
          <PageHeader>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setShowForm(true)}>
                  Login
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setShowForm(true)}>
                  Register
                </button>
              </PageHeader>
          <Outlet/>
          
        </div>
      </div>
    </div>
  );
}
