import { createSlice } from "@reduxjs/toolkit";

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
        updateStart: (state) => {
            state.pending = true;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.userInfo = action.payload;
        },
        updateError: (state) => {
            state.error = true;
            state.pending = false;
        }
    }


})

// export const { update, remove } = userSlice.actions;     //sync operation
export const { updateStart, updateSuccess, updateError} = userSlice.actions;  
export default userSlice.reducer;