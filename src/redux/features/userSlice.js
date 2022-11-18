import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUserThunk = createAsyncThunk('user/update', async (user) =>{
    const res = await axios.post('http://localhost:8800/api/users/125/update', user);
    return res.data;
})


export const userSlice = createSlice({
    // name: 'user',                    //sync operation
    // initialState: {
    //     name: 'Sharon',
    //     email: 'sharon@ymail.com'
    // },
    // reducers: {
    //     update: (state, action) => {
    //         state.name = action.payload.name;
    //         state.email = action.payload.email;
    //     },
    //     remove: (state) => state = {},
    // }

    name: 'user',                          //async operation I(using custom reducers!!!)
    initialState: {
        userInfo: {
            name: 'Sharon',
            email: 'sharon@ymail.com'
        },
        pending: null,
        error: false
    },
    reducers: {
        // updateStart: (state) => {
        //     state.pending = true;
        // },
        // updateSuccess: (state, action) => {
        //     state.pending = false;
        //     state.userInfo = action.payload;
        // },
        // updateError: (state) => {
        //     state.error = true;
        //     state.pending = false;
        // }
    },
    extraReducers: {
        [updateUserThunk.pending] : (state) => {
            state.pending = true;
            state.error = false;
        },
        [updateUserThunk.fulfilled] : (state, action) => {
            state.pending = false;
            state.userInfo = action.payload;
        },
        [updateUserThunk.rejected] : (state) => {
            state.pending = null;
            state.error = true;
        },
        
    }


})

// export const { update, remove } = userSlice.actions;     //sync operation
// export const { updateStart, updateSuccess, updateError} = userSlice.actions;   //async operation method I
export default userSlice.reducer;