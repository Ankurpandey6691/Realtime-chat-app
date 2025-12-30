import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { loginUser } from '../webservice/authApi';

export default function LoginForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const login = useCallback(async (data) => {
        setLoading(true);
        try {
            let response = await loginUser(data);
            if (response.success) {
                setLoading(false);
                window.localStorage.setItem("token", response.data.token)
                dispatch({ type: "loggedSlice/LOG_USER", payload: { success: true, data: response.data } })
                navigate("/c");
                reset();
                toast.success(response.message);
            } else {
                setLoading(false);
                toast.error(response.message || "Login Failed")
            }
        } catch (error) {
            toast.error(error.message || "Server Error");
            setLoading(false);
        }


    }, [dispatch, navigate, reset])

    return (
        <>
            <form className="space-y-5" onSubmit={handleSubmit(login)}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email | Mobile
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your Email | Mobile"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        {...register("user_name", { required: "Username is Required" })}
                    />
                    {errors.username?.message && <p className="text-red-600 text-xs">{errors.username?.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        {...register("password", { required: "password is Required" })}
                    />
                    {errors.password?.message && <p className="text-red-600 text-xs">{errors.password?.message}</p>}
                </div>
                <button
                    type="submit"
                    className={`${loading ? "bg-indigo-400 cursor-progress" : "bg-indigo-600"} w-full text-white py-2 rounded-lg font-semibold hover:bg-indigo-400 transition-all cursor-pointer`}
                    disabled={loading}
                >
                    {"Login"}
                </button>
            </form>
        </>
    )
}
