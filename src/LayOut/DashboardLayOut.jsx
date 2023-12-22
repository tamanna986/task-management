import { FaBookReader, FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Profile from "../Pages/Profile/Profile";


const DashboardLayOut = () => {
    return (
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 md:w-72 min-h-screen bg-green-950 text-white">
        <div className="ml-10 mt-10"><Profile></Profile></div>
            <ul className="menu p-4 text-lg font-semibold ">
                    <>
                    <li>
                    <NavLink to="/">
                    <FaHome></FaHome>
                       Home
                        </NavLink>
                        </li>
                
                <li>
                    <NavLink to="/dashboard">
                        <FaBookReader></FaBookReader>
                        Manage Task </NavLink>
                </li>
                <li>
                    <NavLink to="dashboard/addtask">
                        <FaBookReader></FaBookReader>
                        Add Task </NavLink>
                </li>
                    </>
 
            </ul>
        </div>
     
        {/* dashboard content */}
        <div className="flex-1 p-8">
            
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default DashboardLayOut;