import { useContext, useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const ManageTask = () => {

    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [tasks, setTasks] = useState([]);
    const userEmail = user.email
    useEffect(() => {
       
        const fetchTasks = async () => {
           
                const userEmail = user.email; // Get the logged-in user's email
                const response = await axiosPublic.get(`/tasks/${userEmail}`);
                setTasks(response.data);
           
        };

        if (user) {
            fetchTasks();
        }
    }, [axiosPublic, user]);

    return (
        <div>
          <div>
          <div className="  mx-auto">
                <h1 className="text-2xl  font-bold text-orange-700 text-center mb-20   ">Tasks for {user.email}</h1></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="space-y-7">
                <h1 className="text-orange-600 font-bold text-center text-2xl">To Do</h1>
                {tasks.map((task) => (
                    <div className="bg-orange-100 h-32 border-0 border-l-4 border-orange-800 rounded-xl text-center items-center "
                    key={task._id}>
                        <h3 className="text-xl pt-3 font-bold text-green-950">{task.title}</h3>
                        <p className="text-gray-500">{task.description}</p>
                        <p className="text-red-700 font-bold">Priority: {task.category}</p>
                        <p className="text-green-800">Due Date: {task.due}</p>
                    </div>
                ))}
            </div>

            {/* ONGOING */}
            <div>
            <div className="space-y-7">
            <h1 className="text-yellow-600 text-center font-bold text-2xl">Processing</h1>
                {tasks.map((task) => (
                    <div className="bg-yellow-100 h-32 order-0 border-l-4 border-yellow-500 rounded-xl"
                    key={task._id}>
                        <h3></h3>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                ))}
            </div>
            </div>

            {/* completed */}
            <div>
            <div className="space-y-7 ">
            <h1 className="text-green-800 font-bold text-2xl text-center">Completed</h1>
                {tasks.map((task) => (
                    <div className="bg-green-100 h-32 order-0 border-l-4 border-green-800 rounded-xl"
                    key={task._id}>
                        <h3></h3>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                ))}
            </div>
            </div>

             </div>
        </div>
        </div>
    );
};

export default ManageTask;