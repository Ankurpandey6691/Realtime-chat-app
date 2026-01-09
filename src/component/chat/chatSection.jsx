import { useCallback, useEffect, useRef, useState } from 'react'
import { BiDotsVertical } from 'react-icons/bi';
import { CiVideoOn } from 'react-icons/ci';
import { IoArrowBack } from 'react-icons/io5';
import { MdCall, MdDone, MdDoneAll } from 'react-icons/md';
import { Link, useLocation, useParams } from 'react-router'
import { getMyChatMessages, sendMessages } from '../../webservice/chatApi/apis';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { socket } from "../../webservice/Websocket/socket"

export default function ChatSection() {

    const { chatId } = useParams();
    const { state } = useLocation();
    const { users } = useSelector(store => store.loggedState)
    const menuRef = useRef(null);
    const messagesEndRef = useRef();
    const [showSettings, setShowSettings] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    // fetch all chat messages
    const fetchAllChatMessages = useCallback(async () => {
        try {
            let response = await getMyChatMessages(chatId);
            if (response.success) {
                setMessages(response.data);
            } else {
                toast.error(response.messages)
            }
        } catch (error) {
            toast.error(error.messages || "Server Error")
        }
    }, [chatId])

    const handleSendMessage = useCallback(async () => {
        if (newMessage.trim() === "") return;

        let obj = {
            message: newMessage,
            chatId
        }

        try {
            let response = await sendMessages(obj);
            if (response.success) {
                setNewMessage("");
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error(error.message || "Server Error")
        }

    }, [chatId, newMessage]);

    const getTickIcon = ({ seen, delivered }) => {
        if (seen.length) {
            return (<MdDoneAll className='text-blue-700 ml-1 text-xl' />);
        } else if (delivered) {
            return (<MdDoneAll className='text-white ml-1 text-xl' />);
        } else {
            return (<MdDone className='text-white ml-1 text-xl' />);
        }
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

    // fetch all messages
    useEffect(() => {
        fetchAllChatMessages()
    }, [fetchAllChatMessages]);

    useEffect(() => {
        socket.emit("chatroom", chatId);

        socket.on("newMessage", (message) => {
            setMessages((prev) => [...prev, message])
        })
    }, [chatId]);

    //  // Auto scroll when messages update
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-2 border-b border-gray-400 bg-white shadow-sm">
                <div className="flex items-center space-x-3">
                    <Link to="/c" className='cursor-pointer p-2 rounded-xl bg-gray-200'>
                        <IoArrowBack
                            className="text-xl"
                        />
                    </Link>

                    <img
                        src={state?.icon}
                        alt={state?.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="font-semibold text-lg">{state?.name}</h2>
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
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                {messages && messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex mb-2 ${msg.sender._id === users._id ? "justify-end" : "justify-start"
                            }`}
                    >
                        <div
                            className={`max-w-xs px-4 py-2 rounded-2xl ${msg.sender._id === users._id
                                ? "bg-blue-500 text-white rounded-br-none"
                                : "bg-gray-300 rounded-bl-none"
                                }`}
                        >
                            <p className="text-sm flex items-center">
                                {msg.message}
                                {msg.sender._id === users._id && getTickIcon({ seen: msg.seen, delivered: msg.delivered })}
                            </p>
                        </div>
                    </div>
                ))}

              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="flex items-center p-3 border-t border-gray-400 bg-white">
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
