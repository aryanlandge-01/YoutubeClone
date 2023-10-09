import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: "Search",
    initialState: {

    },
    reducers: {
        CacheResult: (state, action) => {
            state = Object.assign(state, action.payload);
        },
    }
});



export const { CacheResult } = SearchSlice.actions;


export default SearchSlice.reducer;