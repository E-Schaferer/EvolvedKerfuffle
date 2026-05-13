import { createSlice } from "@reduxjs/toolkit";

export const combatGridSlice = createSlice({
    name: "combatGrid",
    initialState: {
        selectedCell: [-1, -1],
        isActive: true,
        //combatGrid: holds matrix of cell metadata
        //missionName: string name of mission
        //objectives: linked list/array that tracks the current objective and cycles to the next upon completion
    },
    reducers: {
        //activateGrid and deactivateGrid are meant to control whether or not the grid can be interacted with, so that the player
        //cannot continue playing while dialogue or tutorials are happening
        activateGrid: (state) => {
            state.isActive = true;
        },
        deactivateGrid: (state) => {
            state.isActive = false
        },
        deselectCell: (state) => {
            state.selectedCell = [-1, -1]
        },
        changeSelectedCell: (state, action) => {
            state.selectedCell = action.payload
        }
    }
})