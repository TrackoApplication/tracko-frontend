import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        userId: null,
        role:null,
        accessToken: null,
        refreshToken: null,
        userGroup: null,

    },
    reducers: {
        login: (state, action) => {
            // state.userId = action.payload.userId;
            state.accessToken = action.payload.accessToken;
            // state.role = action.payload.role;
            // state.userGroup = action.payload.userGroup;
            // state.refreshToken = action.payload.refreshToken;
        }
    }
})

export const { login } = authSlice.actions;

export default authSlice.reducer;
