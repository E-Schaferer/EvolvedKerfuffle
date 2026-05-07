import { CombatGrid1 } from "../CombatGrid/CombatGrid1"
import "./MissionPlayScreen.scss"

export const MissionPlayScreen = () => {
    return (
        <div className="mission-play-screen-container">
            <div className="top">top</div>
            <div className="left">left</div>
            <div className="center">
                <CombatGrid1 width={5} height={5} />
            </div>
            <div className="right">right</div>
            <div className="bottom">bottom</div>
        </div>
    )
}