import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (

        <div className="flex items-center gap-4 mt-3">
            <div className="w-8 rounded-full">
                <img src={user.photoURL} />
            </div>
            <h1 className="font-bold text-lg text-orange-700">{user.displayName}</h1>

        </div>


    );
};

export default Profile;