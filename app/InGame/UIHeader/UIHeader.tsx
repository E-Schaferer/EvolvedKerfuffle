import { useDispatch } from "react-redux";
import "./UIHeader.scss";
import { menuSlice } from "~/ReduxStore/MenuSlice/MenuSlice";

export const UIHeader = () => {
    const dispatch = useDispatch();

    const backToMainMenu = () => {
        dispatch(menuSlice.actions.setCurrentMenuPage("mainMenu"))
    }

    return (
        <div className="ui-header-container">
            <div className="ui-header-left">blank?</div>
            <div className="ui-header-center">animations</div>
            <div className="ui-header-right"><button onClick={backToMainMenu}>back to menu</button></div>
        </div>
    )
}