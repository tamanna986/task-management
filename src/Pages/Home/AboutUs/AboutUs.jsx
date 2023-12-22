import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const AboutUs = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="hero min-h-screen bg-[url('https://i.ibb.co/cYPdTB3/Confetti-4s-1366px.png')] bg-cover bg-no-repeat ">
  <div className="hero-content hero-overlay bg-opacity-60 ">
    <div className=" text-center">
      <h1 className="text-3xl font-bold text-green-800">Welcome to SCC Technovision Inc,</h1>
      <p className="py-6 text-white"> Dedicated to empowering business analysts with an innovative and efficient approach to task management. We understand the intricate demands of your role, and our platform is crafted to elevate your productivity and streamline your workflow.  we merge cutting-edge technology with a deep understanding of business analysis needs, providing a comprehensive solution tailored to meet the challenges you face daily. Our commitment is to equip you with intuitive tools that simplify complex tasks, facilitate collaboration, and foster seamless project execution. Join us in revolutionizing the way business analysts work and excel in their endeavors.</p>
      {
         !user &&  <Link to = "/login"><button className="btn bg-white text-green-950 outline-none border-0 border-y-4 border-orange-700">Let’s Explore!</button></Link>
      }

    </div>
  </div>
</div>
    );
};

export default AboutUs;