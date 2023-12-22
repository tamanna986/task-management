
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePick from "../../Component/Navbar/DatePick/DatePick";

const AddTask = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    // const notify = () => toast("Task Added!");
    // State for the selected due date
    const [dueDate, setDueDate] = useState(new Date());

    const onSubmit = async (data) => {


        console.log("ondubmt")

        const task = {

            email: data.email,
            title: data.postTitle,
            description: data.postDescription,
            category: data.category,
            due: dueDate

        }


        const addedTask = await axiosPublic.post('/tasks', task);
        console.log(addedTask.data)
        if (addedTask.data.insertedId) {
            // show success popup
            reset();
            toast("Task Added!")
           
            
        }


    };


    return (
        <div>
            <div className="w-60  mx-auto">
                <h1 className="text-2xl  font-bold text-green-900 text-center mb-20  border-0 border-l-4 border-orange-700 ">Add Task</h1></div>


            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-orange-700">Author Email*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Author Email"
                            defaultValue={user.email}
                            {...register('email', { required: true })}
                            required
                            className="input input-bordered w-full"
                            readOnly />
                    </div>



                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-orange-700">Task Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Post Title"
                            {...register('postTitle', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-orange-700">Task Description</span>
                        </label>
                        <textarea {...register('postDescription')} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </div>

                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-orange-700">Priority*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>

                                <option value="low">Low </option>
                                <option value="moderate">Moderate </option>
                                <option value="high">High </option>


                            </select>
                        </div>



                    </div>

                    <div className="flex  items-center gap-3">
                        <label className="label">
                            <span className="label-text t text-lg py-3    text-orange-700 font-semibold rounded-lg">
                                Due Date
                            </span>
                        </label>

                        <DatePick selected={dueDate} setStartDate={setDueDate} />
                    </div>

                    <input
                        className="btn font-semibold  border-0 border-y-4 border-orange-600  font-lg text-green-950 "
                        type="submit" value="Add Task" />

                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddTask;