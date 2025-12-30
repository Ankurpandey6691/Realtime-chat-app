import { useCallback, useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import { registerUser } from '../webservice/authApi';

export default function SignupForm({ setIsSignup }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [showpass, setShowPass] = useState({ first: false, second: false })

    const signUp = useCallback(async (data) => {
        setLoading(true);

        try {
            let response = await registerUser(data);

            if (response.success) {
                setLoading(false);
                toast.success("Sign Up Successfully")
                reset();
                setIsSignup(false);
            } else {
                setLoading(false);
                toast.error("Sign Up Failed")
            }
        } catch (error) {
            setLoading(false);
            toast.error(error.message || "server Error")
        }


    }, [reset, setIsSignup])

    return (
        <>
            <form className="space-y-5" onSubmit={handleSubmit(signUp)}>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        {...register("user_name", { required: "User Name is Required" })}
                    />
                    {errors.firstName?.message && <p className="text-red-600 text-xs">{errors.firstName?.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        {...register("email", { required: "email is Required" })}
                    />
                    {errors.email?.message && <p className="text-red-600 text-xs">{errors.email?.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your mobile"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        {...register("mobile", {
                            required: "mobile number is Required", pattern: {
                                value: /(0|91)?[6-9][0-9]{9}/,
                                message: "Invalid mobile No"
                            }
                        })}
                    />
                    {errors.mobile?.message && <p className="text-red-600 text-xs">{errors.mobile?.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <div className="flex items-center">
                        <input
                            type={showpass.first ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            {...register("password", { required: "password is Required" })}
                        />

                        {showpass.first ? <FaEyeSlash
                            className={`${showpass.first && "text-sky-600"} relative z-10 text-xl ml-[-40px] cursor-pointer`}
                            onClick={() => setShowPass(prev => ({ ...prev, first: false }))}
                        /> :
                            <FaEye
                                className={`${showpass.first && "text-black"} relative z-10 text-xl ml-[-40px] cursor-pointer`}
                                onClick={() => setShowPass(prev => ({ ...prev, first: true }))}
                            />}
                    </div>
                    {errors.password?.message && <p className="text-red-600 text-xs">{errors.password?.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                    </label>
                    <div className="flex items-center">
                        <input
                            type={showpass.second ? "text" : "password"}
                            placeholder="Confirm your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            {...register("cpassword", { required: "Comfirm password is Required" })}
                        />

                        {showpass.second ? <FaEyeSlash
                            className={`${showpass.second && "text-sky-600"} relative z-10 text-xl ml-[-40px] cursor-pointer`}
                            onClick={() => setShowPass(prev => ({ ...prev, second: false }))}
                        /> :
                            <FaEye
                                className={`${showpass.second && "text-black"} relative z-10 text-xl ml-[-40px] cursor-pointer`}
                                onClick={() => setShowPass(prev => ({ ...prev, second: true }))}
                            />}
                    </div>
                    {errors.cpassword?.message && <p className="text-red-600 text-xs">{errors.cpassword?.message}</p>}
                </div>

                <button
                    type="submit"
                    className={`${loading ? "bg-indigo-400 cursor-progress" : "bg-indigo-600"} w-full text-white py-2 rounded-lg font-semibold hover:bg-indigo-400 transition-all cursor-pointer`}
                    disabled={loading}
                >
                    Sign Up
                </button>
            </form>
        </>
    )
}
