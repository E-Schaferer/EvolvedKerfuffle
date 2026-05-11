import { CombatGrid1 } from "../CombatGrid/CombatGrid1"
import { DetailSidebar } from "../DetailSidebar/DetailSidebar"
import { UIFooter } from "../UIFooter/UIFooter"
import { UIHeader } from "../UIHeader/UIHeader"
import "./MissionPlayScreen.scss"

export const MissionPlayScreen = () => {
    return (
        <div className="mission-play-screen-container">
            <div className="top"><UIHeader /></div>
            <div className="left"><DetailSidebar /></div>
            <div className="center">
                <CombatGrid1 width={15} height={20} />
            </div>
            <div className="right"><DetailSidebar /></div>
            <div className="bottom"><UIFooter /></div>
        </div>
    )
}