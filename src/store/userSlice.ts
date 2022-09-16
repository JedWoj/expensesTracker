import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        userId: null,
        isLoggedIn: false,
    },
    // extraReducers: builder => {
    //     builder.addCase(fetchUsers.pending, state => {
    //         state.isLoggedIn = false;
    //     })
    // },
    reducers: {
        logIn(state, action: PayloadAction<string>) {
            state.isLoggedIn = true;
            state.userId = action.payload;
        }
    }
});

// export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
//     const data = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`);
// })

export const userActions = userSlice.actions;
export default userSlice;