import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chatSlice",
    initialState: {
        total: 0,
        chats: []
    },
    reducers: {
        ADD_CHATS: (state, action) => {
            state.chats = action.payload
        }
    }
});

export default chatSlice.reducer;