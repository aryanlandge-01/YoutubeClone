import { createSlice } from "@reduxjs/toolkit";


const AppSlice = createSlice({
    name: "app",
    initialState: {
        ismenuopenflag: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.ismenuopenflag = !state.ismenuopenflag;
        },
        closeMenu: (state) => {
            state.ismenuopenflag = false;
        }
    }
});

export const { toggleMenu, closeMenu } = AppSlice.actions;

export default AppSlice.reducer;