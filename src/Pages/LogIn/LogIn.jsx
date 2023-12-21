import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIn = () => {
    // const axiosPublic = useAxiosPublic();
    const { signIn,signInWithGoogle, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

      // google log in

      const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
              const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photo: result.user?.photoURL
            }

            // axiosPublic.post('/users', userInfo)
            // .then(res =>{
            //     console.log(res.data);
            //     Swal.fire({
            //       position: 'top-end',
            //       icon: 'success',
            //       title: 'Log In Sucessful',
            //       showConfirmButton: false,
            //       timer: 1500
            //     })
            //   //      // to go to desired page using navigate
            //   navigate(from, { replace: true });
            //     navigate('/');
            // })
              
      // to go to desired page using navigate
              navigate(from, { replace: true });
                navigate('/');

            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-[url('https://i.ibb.co/cYPdTB3/Confetti-4s-1366px.png')] bg-cover bg-no-repeat ">
       
        
        <div className="card  w-full max-w-sm shadow-3xl  backdrop-blur-sm bg-white/30 my-20 ">
          <form  onSubmit={handleLogin} className="card-body ">
          <img className="w-14  mx-auto" src="https://i.ibb.co/vzLWdWq/checklist-1295319-640.png" alt="" />
            <div className="form-control text-lg ">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input type="email" placeholder="email" name = "email" className="input input-bordered " required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input type="password" placeholder="password" name = "password" className="input input-bordered " required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-orange-500">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              
              <input  className="btn text-white  bg-green-900" type="submit" value="Login" />
            </div>
            <div className="divider divider-success text-white">Or Log In with</div>
            <div className="form-control mt-6">
            
            <button   onClick={handleGoogleSignIn} className="btn text-white  bg-green-900" ><FaGoogle></FaGoogle> Google</button>
            </div>
            <h1 className="text-center mt-3 text-purple-100">Don't have an account? <span className="underline"><Link to = "/register">Register here</Link></span></h1>
          </form>
        </div>
      
    </div>
    );
};

export default LogIn;