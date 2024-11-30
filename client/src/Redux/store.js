import { configureStore } from "@reduxjs/toolkit";


import courseSliceReducer from './Slices/ContactSlice.js';
import authSliceReducer from './Slices/AuthSlice.js';

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course: courseSliceReducer
    },
    devTools: true
});

export default store;