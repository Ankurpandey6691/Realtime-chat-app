
export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16">
                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-5xl font-bold mb-4">
                        Connect. Chat. <span className="text-indigo-600">Collaborate.</span>
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Chatify lets you talk with your friends, teams, and communities in
                        real time — securely and beautifully.
                    </p>
                    <div className="flex justify-center lg:justify-start gap-4">
                        <a
                            href="/signup"
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
                        >
                            Get Started
                        </a>
                        <a
                            href="/learn-more"
                            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Chat Preview */}
                <div className="lg:w-1/2 mt-12 lg:mt-0">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md mx-auto">
                        {/* Chat header */}
                        <div className="flex items-center justify-between border-b pb-2 mb-4">
                            <h3 className="font-semibold text-gray-800">Chat Room</h3>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>

                        {/* Chat messages */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-2">
                                <div className="bg-gray-200 text-gray-800 px-3 py-2 rounded-xl max-w-[75%]">
                                    Hey, are you joining the meeting today?
                                </div>
                            </div>
                            <div className="flex items-start justify-end gap-2">
                                <div className="bg-indigo-600 text-white px-3 py-2 rounded-xl max-w-[75%]">
                                    Yes! Just finishing up something. Will be there in 5.
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="bg-gray-200 text-gray-800 px-3 py-2 rounded-xl max-w-[75%]">
                                    Great! See you soon 👋
                                </div>
                            </div>
                        </div>

                        {/* Input box */}
                        <div className="mt-6 flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700">
                                ➤
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
