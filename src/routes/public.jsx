import { Navigate, Outlet } from 'react-router'
import Header from '../component/header'
import Footer from '../component/footer'

export default function PublicRoute() {

    if (window.localStorage.getItem("token")) {
        return <Navigate to="/c" />
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-50 text-gray-800">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
