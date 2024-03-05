import { createSlice } from '@reduxjs/toolkit';

const firstNameSlice = createSlice({
    name: "firstName",
    initialState: {
        firstName: null,
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        modFirstName: () => {},
        clearFirstName: (state) => {
            state.firstName = null
        },
    }
})

export const { setFirstName, clearFirstName } = firstNameSlice.actions

export default firstNameSlice.reducer