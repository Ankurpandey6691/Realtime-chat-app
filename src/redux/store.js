import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/userSlice";
import loggedSlice from "./reducer/loggedInUser";
import chatSlice from "./reducer/chatSlice";

export default configureStore({
    reducer: {
        userState: userSlice,
        loggedState : loggedSlice,
        myChats : chatSlice
    }
});