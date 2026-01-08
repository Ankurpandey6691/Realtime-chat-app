import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router";
import { authMe } from "../webservice/authApi";
import { socket } from "../webservice/Websocket/socket";

export default function ProtectedRoute() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let auth = window.localStorage.getItem("token");
    const { logged, users } = useSelector(store => store.loggedState)

    const fetchLoggedInUser = useCallback(async () => {
        if (auth && !logged) {
            let response = await authMe();
            if (response.success) {
                dispatch({ type: "loggedSlice/LOG_USER", payload: { success: response.success, data: response.data } })
            } else {
                window.localStorage.removeItem("token");
                navigate("/")
            }
        }
    }, [dispatch, navigate, logged, auth])

    useEffect(() => {
        fetchLoggedInUser()
    }, [fetchLoggedInUser]);


    useEffect(() => {
        socket.connect();
        socket.emit("join", users._id);
       
        return ()=>{
            socket.disconnect()
        }
    }, [users._id])

    return (
        <>
            {(auth) ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}
