import { useDispatch, useSelector } from "react-redux"
import type { rootState } from "../../ReduxStore/storeTypes"
import { useCallback } from "react"
import { combatGridSlice } from "../../ReduxStore/CombatGridSlice/CombatGridSlice"

export const DevToggleActivationButton = () => {
    const dispatch = useDispatch()
    const activationStatus = useSelector((state: rootState) => state.combatGrid.isActive)

    //TODO: currently not working
    const onClick = useCallback(() => {
        if (activationStatus) {
            console.log("heeho activating!")
            dispatch(combatGridSlice.actions.activateGrid())
        } else {
            console.log("heeho deactivating!")
            dispatch(combatGridSlice.actions.deactivateGrid())
        }
    }, [activationStatus])

    return (
        <button onClick={onClick} type="button">toggle activation</button>
    )
}