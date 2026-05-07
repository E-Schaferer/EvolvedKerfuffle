import { useMemo, type ReactElement } from "react";
import "./CombatGrid1.scss";

export const CombatGrid1 = (props: {width: number, height: number}) => {
    const {width, height} = props;
    const cells = useMemo<ReactElement[]>(() => {
        const output: ReactElement[] = [];
        for (let i = 1; i < width + 1; i++) {
            for(let j = 1; j < height + 1; j++) {
                output.push(<div style={{gridRow: i, gridColumn: j}}></div>)
            }
        }
        return output;
    }, [width])

    return (
        <div className="combat-grid-1-container">
            {cells}
        </div>
    )
}