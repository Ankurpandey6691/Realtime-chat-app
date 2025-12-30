import { useEffect, useRef, useState } from 'react'
import { BiDotsVertical } from 'react-icons/bi';
import { CiVideoOn } from 'react-icons/ci';
import { IoArrowBack } from 'react-icons/io5';
import { MdCall, MdDone, MdDoneAll } from 'react-icons/md';
import { Link, useOutletContext } from 'react-router'

export default function ChatSection() {
    const selectedUser = useOutletContext();
    const menuRef = useRef(null);
    const [showSettings, setShowSettings] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "John Doe", text: "Hey, are you there?", status: "read" },
        { sender: "You", text: "Yes, I am here!", status: "sent" },
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim() === "") return;
        setMessages([
            ...messages,
            { sender: "You", text: newMessage, status: "sent" },
        ]);
        setNewMessage("");
    };

    const getTickIcon = (status) => {
        if (status === "sent")
            return (<MdDone className='text-white ml-1 text-xl' />);
        if (status === "delivered")
            return (<MdDoneAll className='text-white ml-1 text-xl' />);
        if (status === "read")
            return (<MdDoneAll className='text-blue-700 ml-1 text-xl' />);
        return null;
    };

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

    return (
        <>
            {/* Chat Header */}
            <div className="bg-white shadow-md p-2.5 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <Link to="/c" className='cursor-pointer p-2 rounded-xl bg-gray-200'>
                        <IoArrowBack
                            className="text-xl"
                        />
                    </Link>

                    <img
                        src={selectedUser?.image}
                        alt="dp"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="font-semibold text-lg">{selectedUser?.firstName} {selectedUser?.lastName}</h2>
                        <p className="text-sm text-green-500">Online</p>
                    </div>
                </div>

                <div className="flex items-center space-x-5">
                    {/* Audio Call Icon */}
                    <button className="hover:text-blue-500 p-2 rounded-xl bg-gray-200 transition cursor-pointer">
                        <MdCall className="text-xl" />
                    </button>

                    {/* Video Call Icon */}
                    <button className="hover:text-blue-500 p-2 rounded-xl bg-gray-200 transition cursor-pointer">
                        <CiVideoOn className='text-xl' />
                    </button>

                    {/* Settings Icon */}
                    <div ref={menuRef} className="relative">
                        <button
                            onClick={() => setShowSettings(!showSettings)}
                            className="hover:text-blue-500 transition"
                        >
                            <BiDotsVertical className="text-2xl" />
                        </button>

                        {/* Dropdown */}
                        {showSettings && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-400 rounded-sm shadow-lg py-2 z-50">
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                    View Contact
                                </button>
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                    Search
                                </button>
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                    Block
                                </button>
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                    Clear Chat
                                </button>
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                    Report
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"
                            }`}
                    >
                        <div
                            className={`max-w-xs px-4 py-2 rounded-2xl ${msg.sender === "You"
                                ? "bg-blue-500 text-white rounded-br-none"
                                : "bg-gray-300 rounded-bl-none"
                                }`}
                        >
                            <p className="text-sm flex items-center">
                                {msg.text}
                                {msg.sender === "You" && getTickIcon(msg.status)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white flex items-center">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                    className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </>
    )
}
