import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
    return (
        <>
            {/* Navbar */}
            <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white/70 backdrop-blur-md sticky top-0 z-50">
                <h1 className="text-2xl font-bold text-indigo-600">Chatify</h1>
                <nav className="hidden md:flex items-center gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `${isActive && "bg-indigo-600 text-white"} px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white transition-all`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/features"
                        className={({ isActive }) => `${isActive && "bg-indigo-600 text-white"} px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white transition-all`}
                    >
                        Features
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `${isActive && "bg-indigo-600 text-white"} px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white transition-all`}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) => `${isActive && "bg-indigo-600 text-white"} px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white transition-all`}
                    >
                        Login
                    </NavLink>
                </nav>
            </header >
        </>
    )
}
