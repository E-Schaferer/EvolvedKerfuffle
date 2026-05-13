import { configureStore } from "@reduxjs/toolkit"
import { combatGridSlice } from "./CombatGridSlice/CombatGridSlice"

export const reduxStore = configureStore({
    reducer: {
        combatGrid: combatGridSlice.reducer
    }
})