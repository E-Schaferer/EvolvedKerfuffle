import { useDispatch } from "react-redux"
import { menuSlice } from "~/ReduxStore/MenuSlice/MenuSlice"

export const MainMenu = () => {
    const dispatch = useDispatch()

    const goToMission = () => {
        dispatch(menuSlice.actions.setCurrentMenuPage("mission"))
    }

    return (
        <div>
            <button onClick={goToMission}>Go to Mission</button>
        </div>
    )
}