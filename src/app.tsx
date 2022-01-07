import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./themes/light/theme.scss";
import AppRoot from './layout/main';
import { setupFontAwesome } from "./fontAwesome";

setupFontAwesome();

ReactDOM.render(
  (
    <BrowserRouter>
      <AppRoot />
    </BrowserRouter>
  ),
  document.getElementById("root")
);