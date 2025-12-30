import { createSlice } from "@reduxjs/toolkit";

const loggedSlice = createSlice({
    name: "loggedSlice",
    initialState: {
        logged: false,
        users: {}
    },
    reducers: {
        LOG_USER: (state, action) => {
            const { data, success } = action.payload
            state.users = { ...data };
            state.logged = success
        }
    }
});

export default loggedSlice.reducer;