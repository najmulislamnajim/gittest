import Lottie from "lottie-react";
import Otp from"../../../../../public/otp.json";
import { useState } from "react";
// import useAxios from "../../../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const VerifyEmail = () => {
    const [otp, setOtp] = useState("");
    // const axiosData = useAxios();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(otp){
            const response =await axios.post("https://projectsyncifyapi.onrender.com/api/v1/auth/verify-email/",{'otp':otp});
            if(response.status === 200){
                toast.success(response.data.message)
                navigate("/login")
            }
        }
    };
    return (
        <div className="flex justify-center items-center h-screen px-10">
            <div className="w-full md:w-1/2">
                <Lottie animationData={Otp} loop={true} className="object-center" />
            </div>
            <div className="w-full md:w-1/2 shadow-xl dark:shadow-slate-600 rounded px-8 pt-6 pb-8 mb-4">
                <form className="mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="otp" className="block  text-2xl md:text-4xl font-bold mb-2">Enter your OTP code:</label>
                        <input type="text" id="otp" 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
                        value={otp} 
                        onChange={(e) => setOtp(e.target.value)} 
                        name="otp" />
                    </div>
                    <input type="submit" 
                    className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " 
                    value="Send" />
                </form>
            </div>
        </div>
    );
};

export default VerifyEmail;
