import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-green-950">
            <div className="grid grid-cols-1 md:grid-cols-2 px-3 md:px-20 py-5 justify-center items-center">
                <img src="https://i.ibb.co/jh4430w/Humaaans-Research-removebg-preview.png" className="w-[430px]" />
                <div className="text-white">
                    <h1 className="text-3xl md:text-5xl font-bold">Task Management System!</h1>
                    <p className="py-6">Streamline tasks effortlessly, from creation to completion. Boost productivity and collaboration with our intuitive platform.</p>
                    <Link to = "/login"><button className="btn bg-white text-green-950 outline-none border-0 border-y-4 border-orange-700">Let’s Explore!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;