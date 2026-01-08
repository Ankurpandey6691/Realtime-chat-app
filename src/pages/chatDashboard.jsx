import { useCallback, useEffect, useRef, useState } from "react";
import { BiDotsVertical } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet, useLocation, } from "react-router";
import { getMyChats } from "../webservice/chatApi/apis";
import { toast } from "react-toastify";

const ChatDashboard = () => {
    const dispatch = useDispatch();
    const { chats } = useSelector(store => store.myChats);
    const { users } = useSelector(store => store.loggedState)
    const menuRef = useRef(null);
    const { pathname } = useLocation()
    const [showSettings, setShowSettings] = useState(false);
    const [search, setSearch] = useState("");


    const LogOut = useCallback(() => {
        window.localStorage.removeItem("token");
        window.location.href = "/"
    }, []);

    // fetch all my chats
    const fetchMyChats = useCallback(async () => {
        try {
            let res = await getMyChats();
            if (!res.success) return console.log(res.message);
            dispatch({ type: "chatSlice/ADD_CHATS", payload: res.data })
        } catch (error) {
            toast.error(error.message || "server error")
        }

    }, [dispatch])


    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowSettings(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // for get all chats
    useEffect(() => {
        fetchMyChats()
    }, [fetchMyChats]);

    return (
        <div className="min-h-screen overflow-y-auto flex bg-gray-100 text-gray-800">
            {/* Sidebar */}
            <div className="h-screen w-72 bg-white shadow-lg border-r border-gray-400">
                <div className="">
                    <div className="px-4 pt-4">
                        <div className="flex justify-between pb-3 items-center">
                            <h2 className="text-2xl font-bold text-blue-600">ChatApp</h2>
                            {/* Settings Icon */}
                            <div ref={menuRef} className="relative">
                                <button
                                    onClick={() => setShowSettings(!showSettings)}
                                    className="hover:text-blue-500 cursor-pointer p-2 rounded-xl bg-gray-200 transition"
                                >
                                    <BiDotsVertical className="text-xl" />
                                </button>

                                {/* Dropdown */}
                                {showSettings && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-400 rounded-sm shadow-lg py-2 z-50">
                                        <Link to="/c/profile" className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                            My Profile
                                        </Link>
                                        <Link to="/c/new-chat" className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                            New Chat
                                        </Link>
                                        <Link to="/c/setting" className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                            Setting
                                        </Link>
                                        <button onClick={LogOut} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Search */}
                        <input
                            type="text"
                            placeholder="Search user..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full border rounded-full px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                    </div>
                    {/* Contact List */}
                    <h3 className="text-lg font-semibold mb-2 px-2">Contacts</h3>
                </div>
                <div className="space-y-2 h-8/11 overflow-y-auto">
                    {chats && chats.map((chat, i) => {
                        let user = chat.members.filter(item => item._id !== users._id)[0]
                        return (
                            < NavLink
                                to={`/c/chat/${chat._id}`}
                                key={i}
                                state={{
                                    name: chat.isGroup ? chat.group_name : user.user_name,
                                    icon: chat.isGroup ? chat.group_icon : user.profile_pic,
                                    _id: chat.isGroup ? chat._id : user._id
                                }}
                                className={({ isActive }) => `flex items-center p-2 rounded-lg cursor-pointer transition ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}
                            >
                                <img
                                    src={chat.isGroup ? chat.group_icon : user.profile_pic}
                                    alt={chat.isGroup ? chat.group_name : user.user_name}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <span>{chat.isGroup ? chat.group_name : user.user_name}</span>
                            </NavLink>
                        )
                    })}
                </div>
            </div>

            {/* Chat Section */}
            {
                pathname === "/c" ? <div className="flex-1 flex items-center justify-center text-gray-400">
                    <p>Select a user to start chatting 💬</p>
                </div> : <div className="flex-1 flex flex-col">
                    <Outlet />
                </div>
            }

        </div >
    );
};

export default ChatDashboard;
