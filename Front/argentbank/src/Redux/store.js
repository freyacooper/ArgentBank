import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth.js';
import firstNameReducer from './profile.js';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        firstName: firstNameReducer,
    }
})