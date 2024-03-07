import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth.js';
import userNameReducer from './profile.js';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        userName: userNameReducer,
    }
})