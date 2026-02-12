import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import languageReducer from "./languageSlice"

const appStore = configureStore(
    {
        reducer: {
            user: userSlice,
            movies: moviesReducer,
            gpt: gptReducer,
            language: languageReducer,
        },
    }
);

export default appStore;