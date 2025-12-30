import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router";

export default function SettingsPage() {
    const [showChangePassword, setShowChangePassword] = useState(false);

    return (
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
            <div className="min-h-screen bg-gray-100 flex justify-center py-4 px-4">
                <div className="w-full bg-white rounded-2xl p-6 space-y-8">
                    {/* Header */}
                    <h2 className="text-2xl font-bold text-gray-800 border-b pb-3">
                        Settings
                    </h2>

                    {/* Profile Section */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-700">Profile</h3>
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://via.placeholder.com/80"
                                alt="User Avatar"
                                className="w-16 h-16 rounded-full object-cover border"
                            />
                            <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-sm">
                                Change Photo
                            </button>
                        </div>
                        <div className="space-y-2">
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <textarea
                                placeholder="Bio"
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                            ></textarea>
                        </div>
                    </section>

                    {/* Account Settings */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-700">Account</h3>
                        <div className="space-y-2">
                            <button
                                onClick={() => setShowChangePassword(!showChangePassword)}
                                className="w-full text-left px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                            >
                                Change Password
                            </button>
                        </div>

                        {/* Change Password UI */}
                        {showChangePassword && (
                            <div className="bg-gray-50 border rounded-lg p-4 space-y-3 mt-2">
                                <input
                                    type="password"
                                    placeholder="Current Password"
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                />
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm New Password"
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                />
                                <div className="flex justify-end space-x-3">
                                    <button
                                        onClick={() => setShowChangePassword(false)}
                                        className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                                        Save
                                    </button>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Notifications */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-700">Notifications</h3>
                        <div className="flex items-center justify-between">
                            <span>Message Sound</span>
                            <input type="checkbox" className="w-5 h-5" />
                        </div>
                        <div className="flex items-center justify-between">
                            <span>Desktop Notifications</span>
                            <input type="checkbox" className="w-5 h-5" />
                        </div>
                    </section>

                    {/* Danger Zone */}
                    <section className="space-y-2 border-t pt-4">
                        <h3 className="text-lg font-semibold text-gray-700">Danger Zone</h3>
                        <div className="flex justify-between items-center">
                            <h3>Delete Your Account</h3>
                            <button className="text-left px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700">
                                Delete Account
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
