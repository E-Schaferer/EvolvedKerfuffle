import { type ReactElement } from "react";
import "./CombatGrid1.scss";
import { CombatGridCell } from "./CombatGridCell/CombatGridCell";

export const CombatGrid1 = (props: {width: number, height: number}) => {
    const {width, height} = props;
    const cells: ReactElement[] = []
    for (let i = 1; i < width + 1; i++) {
        for(let j = 1; j < height + 1; j++) {
            cells.push(<CombatGridCell x={i} y={j}  />)
        }
    }

    return (
        <div className="combat-grid-1-container">
            {cells}
        </div>
    )
}