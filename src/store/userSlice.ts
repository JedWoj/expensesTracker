import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        userId: null,
        isLoggedIn: false,
        activePage: 0,
    },
    reducers: {
        logIn(state, action: PayloadAction<string>) {
            state.isLoggedIn = true;
            state.userId = action.payload;
        },
        logOut(state) {
            state.isLoggedIn = false;
            state.userId = null;
            state.activePage = 0;
        },
        setActivePage(state, action: PayloadAction<number>) {
            state.activePage = action.payload;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;