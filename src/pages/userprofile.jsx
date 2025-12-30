import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

const UserProfile = () => {

    const { users } = useSelector(store => store.loggedState);
    const dispatch = useDispatch()

    const handleBioChange = (e) => {
        dispatch({ type: "loggedSlice/LOG_USER", payload: { success: true, data: { ...users, bio: e.target.value } } });
    };

    const handleFileUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            dispatch({ type: "loggedSlice/LOG_USER", payload: { success: true, data: { ...users, profile_pic: url } } });
            // 🔗 Upload file to backend/cloud here
        }
    };

    const handleSave = () => {
        console.log("Profile saved:", users);
        // 🔗 Call API to update user profile
    };

    return (
        <>
            <div className="h-screen overflow-y-auto">
                <div className="sticky z-40 top-0 bg-white shadow-md p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <Link to="/c" className='cursor-pointer p-2 rounded-xl bg-gray-200'>
                            <IoArrowBack
                                className="text-xl"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center text-gray-400 p-6">
                    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center w-full">
                        {/* Profile Picture */}
                        <div className="relative">
                            <img
                                src={users.profile_pic}
                                alt="Profile"
                                className="w-28 h-28 rounded-full object-cover border-4 border-blue-200 shadow-md"
                            />
                            <label className="absolute bottom-0 right-0 bg-blue-500 text-white text-sm px-2 py-1 rounded-full cursor-pointer hover:bg-blue-600">
                                Edit
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileUpload}
                                />
                            </label>
                        </div>

                        {/* Name & Email */}
                        <div className="mt-4 text-center">
                            <h2 className="text-xl font-bold">{users.user_name}</h2>
                            <p className="text-gray-500 text-sm">{users.email}</p>
                        </div>

                        {/* Bio Section */}
                        <div className="w-full mt-6">
                            <label className="block text-gray-700 font-medium mb-2">Bio</label>
                            <textarea
                                value={users.bio}
                                onChange={handleBioChange}
                                rows={4}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>

                        {/* Save Button */}
                        <button
                            onClick={handleSave}
                            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 shadow"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
