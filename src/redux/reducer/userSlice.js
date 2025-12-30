import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        totalUsers: 0,
        users: []
    },
    reducers: {
        ADD_USERS: (state, action) => {
            state.users = action.payload.users
            state.totalUsers = action.payload.total
        }
    }
});

export default userSlice.reducer;