import { createSlice } from "@reduxjs/toolkit";
import { Livechat_offset } from "./Constant";


const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {

            state.messages.splice(Livechat_offset, 1);

            state.messages.unshift(action.payload);
        },
    },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;