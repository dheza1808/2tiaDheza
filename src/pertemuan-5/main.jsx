import { AiFillApple } from "react-icons/ai"; 
import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import PageHeader from "./components/PageHeader";
import Dashboard from "./pages/Dashboard";
import ListMenu from "./layouts/ListMenu";

createRoot(document.getElementById("root")).render(
  <div id="app-container" className="bg-gray-100 min-h-screen flex">
    <div id="layout-wrapper" className="flex flex-row flex-1">
		<Sidebar/>
		<div id="main-content" className="flex-1 p-4">
		      <Header />
			  <PageHeader>
        		<button className="bg-green-500 text-white px-4 py-2 rounded-lg">Add</button>
        		<button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Export</button>
        		<button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">Kembali</button>
				</PageHeader>
		      <Dashboard />
	  </div>
</div>
</div>
);
