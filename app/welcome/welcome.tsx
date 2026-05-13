import { MissionPlayScreen } from "~/InGame/MissionPlayScreen/MissionPlayScreen";
import { reduxStore } from "../InGame/ReduxStore/store";
import { Provider } from "react-redux";
import "./welcome.scss";

export function Welcome() {
  return (
    <main className="main">
      <Provider store={reduxStore} >
        <MissionPlayScreen />
      </Provider>
    </main>
  );
}
