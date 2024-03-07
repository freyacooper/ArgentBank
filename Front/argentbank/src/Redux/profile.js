import { createSlice } from '@reduxjs/toolkit';

const userNameSlice = createSlice({
    name: "userName",
    initialState: {
        userName: null,
    },
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        clearUserName: (state) => {
            state.userName = null
        },
    }
})

export const { setUserName, clearUsertName } = userNameSlice.actions

export default userNameSlice.reducer