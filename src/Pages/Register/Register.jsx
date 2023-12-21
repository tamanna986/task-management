import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";


const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    // const axiosPublic = useAxiosPublic();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                         // create user entry in the database
                         const status = 'silver'
                         const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photoURL,
                            status

                         }
                        //  axiosPublic.post('/users', userInfo)
                        //  .then(res =>{
                        //     if (res.data.insertedId) {
                        //         console.log('user added to the database')
                        //         reset();
                        //         Swal.fire({
                        //             position: 'top-end',
                        //             icon: 'success',
                        //             title: 'User created successfully.',
                        //             showConfirmButton: false,
                        //             timer: 1500
                        //         });
                        //         navigate('/');
                        //     }
                        //  })
                        // console.log('user profile info updated')


                    })
                    .catch(error => console.log(error))
            })
    };



    return (
        <div className="hero min-h-screen bg-[url('https://i.ibb.co/cYPdTB3/Confetti-4s-1366px.png')] bg-cover bg-no-repeat ">
           

            <div className="card  w-full max-w-sm shadow-3xl backdrop-blur-sm bg-white/30  my-20 ">
                <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="card-body ">
                    <img className="w-14 rounded-full mx-auto" src="https://i.ibb.co/vzLWdWq/checklist-1295319-640.png" alt="" />
                    <div className="form-control text-lg ">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text"
                          {...register("name", { required: true })}
                           placeholder="Name" name="name" className="input input-bordered " required />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control text-lg ">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email"
                         {...register("email", { required: true })}
                          placeholder="email" name="email" className="input input-bordered " required />
                          {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control text-lg ">
                        <label className="label">
                            <span className="label-text text-white">Image Url</span>
                        </label>
                        <input type="text"
                         {...register("photoURL", { required: true })}
                          placeholder="Image Url" name="photoURL" className="input input-bordered " required />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password"
                        {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} 
                        placeholder="password" name="password" className="input input-bordered " required />
                         {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-purple-300">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn  bg-green-800 text-white" type="submit" value="Register" />
                    </div>
                   
                 
                    <h1 className="mt-2 text-center text-purple-100">Already have an account? <span className="underline"><Link to="/login">Login here</Link></span></h1>
                </form>
            </div>

        </div>
    );
};

export default Register;