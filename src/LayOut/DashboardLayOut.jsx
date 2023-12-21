import { FaBookReader, FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const DashboardLayOut = () => {
    return (
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 md:w-72 min-h-screen bg-green-950 text-white">
        <img className=" mt-12 " src="https://i.ibb.co/Kjx1qNK/l1-removebg-preview-3.png" alt="" />
            <ul className="menu p-4 text-lg font-semibold ">
                    <>
                    <li>
                    <NavLink to="/">
                    <FaHome></FaHome>
                       Home
                        </NavLink>
                        </li>

                     <li>
                    <NavLink to="/dashboard/myprofile">
                        <FaHome></FaHome>
                        My Profile</NavLink>
                </li>
                
                <li>
                    <NavLink to="/dashboard/myposts">
                        <FaBookReader></FaBookReader>
                        Manage Task </NavLink>
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