import { configureStore } from "@reduxjs/toolkit"
import { combatGridSlice } from "./CombatGridSlice/CombatGridSlice"
import { menuSlice } from "./MenuSlice/MenuSlice"

export const reduxStore = configureStore({
    reducer: {
        combatGrid: combatGridSlice.reducer,
        menus: menuSlice.reducer
    }
})