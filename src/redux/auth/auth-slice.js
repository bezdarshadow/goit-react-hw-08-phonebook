import { createSlice } from '@reduxjs/toolkit'
import * as operations from './auth-operations'

const initialState = {
    user: {
        name: "",
        email: ""
    },
    token: "",
    isLogin: false,
    error: null,
    loading: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [operations.signup.pending]: (state)=> {
            state.loading = true;
            state.error = null;
        },
        [operations.signup.fulfilled]: (state, {payload}) => {
            state.user = {...payload.user};
            state.token = payload.token;
            state.loading = false;
            state.isLogin = true;
        },
        [operations.signup.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [operations.login.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [operations.login.fulfilled]: (state, {payload}) => {
            state.user = {...payload.user};
            state.token = payload.token;
            state.loading = false;
            state.isLogin = true;            
        },
        [operations.login.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;            
        },
        [operations.logout.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [operations.logout.fulfilled]: (state) => {
            state.user = {...initialState.user};
            state.token = "";
            state.isLogin = false;
            state.loading = false;
        },
        [operations.logout.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [operations.current.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [operations.current.fulfilled]: (state, {payload}) => {
            state.user = {...payload};
            state.loading = false;
            state.isLogin = true;            
        },
        [operations.current.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;            
        },
    }
});

export default authSlice.reducer;