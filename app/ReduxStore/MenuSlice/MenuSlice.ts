import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menuSlice",
    initialState: {
        currentMenu: "mainMenu"
    },
    reducers: {
        setCurrentMenuPage: (state, action) => {
            state.currentMenu = action.payload;
        }
    }
})