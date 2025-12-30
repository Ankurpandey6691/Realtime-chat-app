import { useState } from "react";
import { Link, Navigate } from "react-router";
import SignupForm from "../component/signupForm";
import LoginForm from "../component/loginForm";

export default function Auth() {

  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => setIsSignup(!isSignup);

  if (window.localStorage.getItem("token")) {
    return <Navigate to="/c" />
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-indigo-100 via-white to-blue-50">
      {/* Left Side - Info Panel */}
      <div className="flex-1 flex flex-col justify-center items-center bg-indigo-600 text-white p-10 lg:p-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Chatify 💬</h1>
        <p className="text-indigo-100 text-lg text-center max-w-md">
          Connect, chat, and collaborate in real time with your friends, team,
          and communities — all in one place.
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex justify-center items-center p-10">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>

          {isSignup ? (<SignupForm setIsSignup={setIsSignup}/>)
            : (
              <LoginForm />
            )}

          <div className="text-center mt-6 text-gray-600">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <button
                  onClick={toggleForm}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={toggleForm}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="text-gray-500 text-sm hover:text-indigo-600 transition-all"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
