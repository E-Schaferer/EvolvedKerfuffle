import { useDispatch, useSelector } from "react-redux";
import "../CombatGrid1.scss";
import { combatGridSlice } from "~/ReduxStore/CombatGridSlice/CombatGridSlice";
import { useMemo } from "react";
import type { rootState } from "~/ReduxStore/storeTypes";

export const CombatGridCell = (props: {x: number, y: number}) => {
    const { x, y } = props;
    const selectedCell = useSelector((state: rootState) => state.combatGrid.selectedCell)
    const dispatch = useDispatch();
    const cellOnClick = () => {
        dispatch(combatGridSlice.actions.changeSelectedCell([x, y]))
    }

    const cellClassName = useMemo(() => {
        return (x === selectedCell[0] && y === selectedCell[1]) ? "combatGridCell hoverSelection currentCell" : "combatGridCell hoverSelection"
    }, [selectedCell])
    
    return (
        <div onClick={cellOnClick} className={cellClassName} style={{gridRow: x, gridColumn: y}}></div>
    )
}