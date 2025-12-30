import { Link } from "react-router";

export default function Features() {
    const features = [
        {
            title: "Real-Time Messaging",
            desc: "Instantly connect with anyone using WebSocket-based messaging for smooth, live conversations.",
            icon: "💬",
        },
        {
            title: "Secure & Private",
            desc: "Your messages are encrypted and safely stored, ensuring your chats stay confidential.",
            icon: "🔒",
        },
        {
            title: "Media Sharing",
            desc: "Send images, documents, and voice notes with ease — all optimized for fast delivery.",
            icon: "📎",
        },
        {
            title: "Group Chats",
            desc: "Create or join group conversations for teams, communities, or friends in one place.",
            icon: "👥",
        },
        {
            title: "Custom Themes",
            desc: "Personalize your chat experience with beautiful light and dark themes.",
            icon: "🎨",
        },
        {
            title: "Cross-Platform",
            desc: "Works seamlessly across desktop, tablet, and mobile browsers — no installation needed.",
            icon: "🌐",
        },
    ];

    return (
        <>
            {/* Features Section */}
            <section id="features" className="px-6 lg:px-20 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Powerful Features to Keep You Connected
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Everything you need for a smooth, reliable, and modern chat
                        experience — designed for speed and simplicity.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all text-center"
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Highlight Section */}
            <section className="bg-indigo-600 text-white py-16 px-6 lg:px-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Why Choose <span className="text-yellow-300">Chatify?</span>
                    </h2>
                    <p className="text-lg mb-6 text-indigo-100">
                        Built for performance, designed for people. Chatify is lightweight,
                        secure, and built with love using modern technologies like React,
                        Node.js, and WebSockets.
                    </p>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <div className="bg-white/10 rounded-xl px-6 py-3">⚡ Fast & Reliable</div>
                        <div className="bg-white/10 rounded-xl px-6 py-3">🧩 Easy to Use</div>
                        <div className="bg-white/10 rounded-xl px-6 py-3">🔐 Privacy First</div>
                        <div className="bg-white/10 rounded-xl px-6 py-3">💻 Cross-Platform</div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-16 px-6">
                <h2 className="text-3xl font-bold mb-4">
                    Start Chatting in Seconds 🚀
                </h2>
                <p className="text-gray-600 mb-8">
                    Join Chatify today and connect with your world in real time.
                </p>
                <Link
                    to="/login"
                    className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
                >
                    Get Started
                </Link>
            </section>
        </ >
    );
}
