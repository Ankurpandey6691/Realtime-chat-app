import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router";
import { authMe } from "../webservice/authApi";

export default function ProtectedRoute() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let auth = window.localStorage.getItem("token");

    const fetchLoggedInUser = useCallback(async () => {
        let response = await authMe();
        if (response.success) {
            dispatch({ type: "loggedSlice/LOG_USER", payload: { success: response.success, data: response.data } })
        } else {
            window.localStorage.removeItem("token");
            navigate("/")
        }
    }, [dispatch, navigate])

    useEffect(() => {
        fetchLoggedInUser()
    }, [fetchLoggedInUser]);

    return (
        <>
            {(auth) ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}
