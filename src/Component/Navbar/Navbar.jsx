import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleSignOut = () => {
    logOut();
  }  
  const LeftNavLink = <>
     <Link to = "/"><li className="text-white text-lg"><a>Home</a></li></Link>
     <Link to = "/about"><li className="text-white text-lg"><a>About Us</a></li></Link>
     <Link to = "/review"><li className="text-white text-lg"><a>Review</a></li></Link>

  </>




    return (
        <div className="navbar bg-green-950">
  <div className="navbar-start">
    
      <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {LeftNavLink}
    </ul>
  </div>

    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost bg-white btn-circle lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-lime-950">
        {LeftNavLink}
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <img className="w-60 md:w-80  " src="https://i.ibb.co/Kjx1qNK/l1-removebg-preview-3.png" alt="" />
  </div>
  <div className="navbar-end">
    
  
  { user?.email ?  <>
        
        <div className="dropdown mr-2  md:mr-14">
      <label tabIndex={0} className="">
      <img className="w-10 h-10 rounded-full mx-1 lg:mx-2" src={user.photoURL} alt={user.displayName}
       
          />
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-0 md:p-2   -ml-20 md:-ml-0 shadow rounded-box  w-28  ">
        
          
          <div className="space-y-5 py-3 px-1">
          <p className="text-white font-semibold font-lg">{user.displayName}</p>
          <p><Link className="text-white font-semibold font-lg" to ="dashboard">Dashboard</Link></p>
          <li ><button className=" font-semibold btn bg-white border-0 border-y-4 border-orange-600 p-3 font-lg " onClick={handleSignOut}>Log out</button></li>
    
          </div>      
        
    
        
      </ul>
    </div>
            
        </> 
        :
        <Link to = "/register"><a className="text-white text-lg">Register</a></Link>
       }
       

  </div>
</div>
    );
};

export default Navbar;