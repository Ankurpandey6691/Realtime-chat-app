import React from 'react'

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="text-center py-6 border-t mt-12 text-gray-500 text-sm">
                © {new Date().getFullYear()} Chatify — Built with ❤️ by Your Team
            </footer>
        </>
    )
}
