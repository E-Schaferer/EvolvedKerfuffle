import { DevToggleActivationButton } from "./DevToggleActivationButton";
import "./UIFooter.scss";

export const UIFooter = () => {
    return (
        <div className="ui-footer-container">
            <div className="ui-footer-left">
                <DevToggleActivationButton />
            </div>
            <div className="ui-footer-center">dialogue box</div>
            <div className="ui-footer-right">end turn button</div>
        </div>
    )
}