import { reduxStore } from "../ReduxStore/store";
import { Provider } from "react-redux";
import "./welcome.scss";
import { MenuRouter } from "~/Menus/Router/Router";

export function Welcome() {
  return (
    <main className="main">
      <Provider store={reduxStore} >
        <MenuRouter />
      </Provider>
    </main>
  );
}
