import { Link } from "react-router";

export default function NotFound() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-50 text-gray-800">
                {/* 404 Illustration */}
                <div className="text-center">
                    <h1 className="text-[120px] font-bold text-indigo-600 leading-none">404</h1>
                    <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
                    <p className="text-gray-600 max-w-md mx-auto mb-8">
                        Oops! The page you’re looking for doesn’t exist or has been moved.
                        Let’s get you back on track.
                    </p>

                    {/* Back Home Button */}
                    <Link
                        to="/"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
                    >
                        ⬅ Back to Home
                    </Link>
                </div>
            </div>
        </>
    );
}
