import React from "react";

export default function About() {
    const team = [
        {
            name: "Krishna Patil",
            role: "Founder & Full Stack Developer",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Aarav Mehta",
            role: "Frontend Engineer",
            img: "https://randomuser.me/api/portraits/men/55.jpg",
        },
        {
            name: "Riya Sharma",
            role: "Backend Engineer",
            img: "https://randomuser.me/api/portraits/women/50.jpg",
        },
        {
            name: "Tanvi Deshmukh",
            role: "UI/UX Designer",
            img: "https://randomuser.me/api/portraits/women/48.jpg",
        },
    ];

    const techStack = [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚀" },
        { name: "MongoDB", icon: "🍃" },
        { name: "WebSockets", icon: "🔌" },
        { name: "Tailwind CSS", icon: "💨" },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="px-6 lg:px-20 py-16 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    About <span className="text-indigo-600">Chatify</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Chatify was built with one mission — to make communication simple,
                    fast, and secure for everyone. Whether you’re chatting with friends,
                    collaborating with your team, or building a community, Chatify is
                    designed to keep you connected — anytime, anywhere.
                </p>
            </section>

            {/* Mission Section */}
            <section className="px-6 lg:px-20 py-16 bg-indigo-600 text-white text-center">
                <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
                <p className="max-w-3xl mx-auto text-indigo-100 text-lg">
                    We believe communication should be effortless. Our mission is to
                    empower people with real-time messaging tools that are fast, reliable,
                    and secure — without sacrificing privacy or performance.
                </p>
            </section>

            {/* Team Section */}
            <section className="px-6 lg:px-20 py-16 text-center">
                <h3 className="text-3xl font-bold mb-10">Meet the Team</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-24 h-24 mx-auto rounded-full mb-4"
                            />
                            <h4 className="font-semibold text-lg">{member.name}</h4>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technology Stack */}
            <section className="px-6 lg:px-20 py-16 bg-gray-100 text-center">
                <h3 className="text-3xl font-bold mb-6">
                    Built With Modern Technologies
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {techStack.map((tech, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-md rounded-xl px-6 py-4 text-center hover:shadow-lg transition-all"
                        >
                            <div className="text-4xl mb-2">{tech.icon}</div>
                            <p className="font-medium">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
