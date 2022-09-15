import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        userId: null,
        isLoggedIn: false,
    },
    reducers: {
        logIn(state, action: PayloadAction<string>) {
            state.isLoggedIn = true;
            state.userId = action.payload;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;