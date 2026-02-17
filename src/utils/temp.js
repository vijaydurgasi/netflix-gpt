import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptResults: null
    },
    reducers: {
        toggleGptsearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptResults: (state, action) => {
            state.gptResults = action.payload;
        },
        clearGptResults: (state) => {
            state.gptResults = null;
        },
    },
});


export const { toggleGptsearchView, addGptResults, clearGptResults } = gptSlice.actions;
export default gptSlice.reducer