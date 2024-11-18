import { configureStore } from "@reduxjs/toolkit";


import courseSliceReducer from './Slices/ContactSlice.js';


const store = configureStore({
    reducer: {
        course: courseSliceReducer
    },
    devTools: true
});

export default store;